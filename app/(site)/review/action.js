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

  export async function handleReviewWrite(firstName, lastName, message) {
    const name = firstName + " " + lastName;
    const review = {
        _type: "testimonial",
        name: name,
        text: message,
        display: false,
        id: crypto.randomUUID(),
    }
    await client.create(review);
  }