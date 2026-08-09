'use client'

import { useState, useEffect } from "react";
import { handleReviewWrite } from "./action";

export default function ReviewPage() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [message, setMessage] = useState();

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    function submit() {
        handleReviewWrite(firstName, lastName, message);
        document.getElementById("submit").style.setProperty('display', 'none')
        document.getElementById("success").style.setProperty('display', 'block')
    }

    return <div className="flex flex-col items-center justify-center">
        <div className="h-[15vh]"></div>
        <p className="text-4xl text-brand-purple pb-[10vh]">Submit a Review!</p>
        <form className="grid grid-cols-2 w-[40vw] grid-rows-[20%_10%_20%_100%_20%] gap-x-4">
            <label className="col-start-1 row-start-1 text-brand-purple">First Name</label>
            <label className="col-start-2 row-start-1 text-brand-purple">Last Name</label>
            <input className="col-start-1 row-start-2 border-b outline-0" onChange={handleFirstName}></input>
            <input className="col-start-2 row-start-2 border-b outline-0" onChange={handleLastName}></input>
            <label className="col-start-1 col-end-2 row-start-3 mt-[20%] text-brand-purple">Review Message</label>
            <textarea
                id="contact-message"
                rows={5}
                onChange={handleMessage}
                className="w-full h-[full] bg-[#E6F4F2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-colors resize-none col-span-2 row-start-4 mt-[5%]"
              />
            <button id="submit" type="button" onClick={() => submit()} className="bg-brand-purple col-span-2 row-start-5 w-[10%] mt-[5%] ml-[45%] rounded text-white border-black border hover:bg-brand-purple-dark">Submit</button>
        </form>
        <p id="success" className="text-2xl text-white rounded bg-brand-purple hidden mt-[25vh]">Review sent!</p>
        <div className="h-[45vh]"></div>
    </div>
}