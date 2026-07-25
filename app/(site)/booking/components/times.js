'use client'

import { client } from "@/sanity/lib/client"
import { useState, useEffect, useRef } from "react"

export default function Timestable({ className="", onValueChange, day="", attr="w-[7vw]", border="border-r"}) {

    const basicTimes = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
         "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]

    const [times, setTimes] = useState(["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
         "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"])
    
    const last = useRef(null)

    function select(val) {
        if (last.current != null) {
            let e = document.getElementById(last.current)
            e.classList.toggle('selected')
            e.classList.toggle('unselected')
        }
        last.current = val
        let f = document.getElementById(val)
        f.classList.toggle('selected')
        f.classList.toggle('unselected')
        onValueChange(val)
    }

    async function updateTimes() {
        let temp = [...basicTimes]
        if (day !== "" && !(new Date() > day)) {
            const date = day.getFullYear()+"-"+String(day.getMonth() + 1).padStart(2, '0')+"-"+String(day.getDate()).padStart(2, '0')
            const query = `*[_type == "appointment" && day == "${date}"] {
                day,
                times
            }`
            const appointment = await client.fetch(query)
            if (appointment.length !== 0) {
                for (let i = 0; i < appointment[0].times.length; i++) {
                    temp = temp.filter(item => item !== appointment[0].times[i])
                }
            }
            setTimes(temp)
        }
        else {
            setTimes([])
        }
    }

    useEffect(() => {updateTimes()
        if (last.current !== null) {
            let e = document.getElementById(last.current)
            e.classList.toggle('selected')
            e.classList.toggle('unselected')
        }
        last.current = null
    }, [day])

    return <div className={`${className}`}>
        <p className="text-brand-purple col-span-3 row-start-1 row-end-2 text-left text-xl ml-[1vw] mt-[2vh]"><b>SELECT A TIME</b></p>
        <div className={"grid grid-cols-3 gap-y-[2vh] w-full border-brand-gold-soft h-full items-center justify-center mt-[2vh] " + border}>
            {times.map((val) => (<button type="button" onClick={() => select(val)} key={val} id={val} className={"border border-brand-green rounded h-[5vh] unselected hover:border-0 relative left-[0.5vw] " + attr}>
                {val}
            </button>))}
        </div>
    </div>
}