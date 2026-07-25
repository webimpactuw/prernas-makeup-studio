'use client'

import {useState, useEffect} from 'react';
import Image from 'next/image';

let today = new Date()
let firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
let last = null
let month = today.toLocaleString('default', { month: 'long' })
let year = today.getFullYear()

export default function Calendarcomp({ className="", onValueChange, k=0}) {

    const [days, setDays] = useState([])
    useEffect(() => {updateCal()}, [])

    function select(val) {
        if (last !== null) {
            let e = document.getElementById(last)
            e.classList.toggle('selected')
            e.classList.toggle('unselected')
        }
        last = val
        let f = document.getElementById(val)
        f.classList.toggle('selected')
        f.classList.toggle('unselected')
        onValueChange(new Date(year, firstDay.getMonth(), val))
    }

    function updateCal() {
        let temp = []
        let start = firstDay.getDay() === 0 ? 6 : firstDay.getDay()-1
        let e = document.getElementById(k+32+"")
        e.innerHTML = `${month} ${year}`
        for (let j = 0-start; j < 0; j++) {
            temp[j+start] = 0
        }
        let i = 1
        let j = start
        while ((new Date(firstDay.getFullYear(), firstDay.getMonth(), i)).getMonth() === firstDay.getMonth()) {
            temp[j] = i
            i++
            j++
        }
        setDays(temp)
        
    }

    function nextMonth() {
        firstDay = new Date(firstDay.getFullYear(), firstDay.getMonth()+1, 1)
        month = firstDay.toLocaleString('default', { month: 'long' })
        year = firstDay.getFullYear()
        updateCal()
        if (last != null) {
            let e = document.getElementById(last)
            e.classList.toggle('selected')
            e.classList.toggle('unselected')
        }
        last = null
        onValueChange()
    }

    function prevMonth() {
        firstDay = new Date(firstDay.getFullYear(), firstDay.getMonth()-1, 1)
        month = firstDay.toLocaleString('default', { month: 'long' })
        year = firstDay.getFullYear()
        updateCal()
        if (last != null) {
            let e = document.getElementById(last)
            e.classList.toggle('selected')
            e.classList.toggle('unselected')
        }
        last = null
        onValueChange()
    }

    return <div className={`${className}`}>
        <div className="grid grid-rows-[10vh_5vh_7vh_7vh_7vh_7vh_7vh_7vh] grid-cols-7 border-brand-gold-soft h-full align-center justify-center items-center">
            <button type="button" onClick={() => prevMonth()} className="col-start-1 col-end-1 row-start-1 ml-[1vw]">
                <Image src="/chevron.svg" height={15} width={15} alt="Prev" className="rotate-90"></Image>
            </button>
            <p id={k+32+""} className="col-start-2 col-span-5 row-start-1 text-brand-purple text-2xl text-center"></p>
            <button type="button" onClick={() => nextMonth()} className="col-start-7 col-end-7 row-start-1 ml-[1vw]">
                <Image src="/chevron.svg" height={15} width={15} alt="Next" className="rotate-270"></Image>
            </button>
            <p className="col-start-1 col-end-1 row-start-2 text-brand-purple-light text-center">Mon</p>
            <p className="col-start-2 col-end-2 row-start-2 text-brand-purple-light text-center">Tue</p>
            <p className="col-start-3 col-end-3 row-start-2 text-brand-purple-light text-center">Wed</p>
            <p className="col-start-4 col-end-4 row-start-2 text-brand-purple-light text-center">Thu</p>
            <p className="col-start-5 col-end-5 row-start-2 text-brand-purple-light text-center">Fri</p>
            <p className="col-start-6 col-end-6 row-start-2 text-brand-purple-light text-center">Sat</p>
            <p className="col-start-7 col-end-7 row-start-2 text-brand-purple-light text-center">Sun</p>
            {days.map((day) => {
                if (day === 0) {
                    return  <div key={crypto.randomUUID()}></div>
                }
                else {
                    return <button key={day} id={k+day+""} type="button" onClick={() => select(k+day)} className="text-brand-purple unselected w-full h-full text-center">
                            {day}
                    </button>
                }
            })}
        </div>
    </div>
}