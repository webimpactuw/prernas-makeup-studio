'use server'

import { createClient } from '@sanity/client'
import { projectId, writeToken } from '@/sanity/env';

const client = createClient({
    projectId: projectId, 
    dataset: 'production',        
    useCdn: false,                
    token: writeToken, 
    apiVersion: "2026-04-01",
  });

  export async function handleAppointmentWrite(date, time) {
    const query = `*[_type=="appointment" && day=="${date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0')}"] {
      _id
    }`
    const doc = await client.fetch(query)
    if (doc.length !== 0) {
      client.patch(doc[0]._id).insert('after', 'times[-1]', [time]).commit()
    }
    else {
      const appointment = {
        _type: "appointment",
        day: date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0'),
        times: [time]
      }
      client.create(appointment)
    }
  }

  export async function clearAppointments(id) {
    client.delete(id)
  }