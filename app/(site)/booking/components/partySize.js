'use client'

import Image from "next/image"

export default function Partysize({ className="", onValueChange, k=0, attr="border", dropSize=""}) {
    let toggle = 0
    function openmenu() {
        let e = document.getElementById(k+34+"")
        if (toggle == 0) {
            e.style.setProperty('display', 'flex')
            toggle = 1
        }
        else {
            e.style.setProperty('display', 'none')
            toggle = 0
        }
    }

function selection(val) {
        let e = document.getElementById(k+33+"")
        let f = document.getElementById(k+34+"")
        e.innerHTML = val
        f.style.setProperty('display', 'none')
        toggle = 0
        onValueChange(val)
    }

    return <div className={`${className}`}>
        <button onClick={openmenu} type="button" className={"text-brand-purple-dark border-brand-gold-soft w-full h-[8vh] flex justify-start items-center " + attr}>
            <p id={k+33+""} className="w-full">Select</p>
            <Image src="/chevron.svg" height={15} width={15} alt="dropdown" className="ml-[-1.5vw]"></Image>
        </button>
        <div id={k+34+""} className={"flex flex-col border-brand-gold-soft border hidden text-brand-purple absolute w-[24.05vw] bg-white "+dropSize}>
            <button onClick={() => selection("1 person")} type="button" className="bg-white hover:bg-brand-green/10">1 person</button>
            <button onClick={() => selection("2 people")} type="button" className="bg-white hover:bg-brand-green/10">2 people</button>
            <button onClick={() => selection("3 people")} type="button" className="bg-white hover:bg-brand-green/10">3 people</button>
            <button onClick={() => selection("other")} type="button" className="bg-white hover:bg-brand-green/10">other</button>
        </div>
    </div>
}