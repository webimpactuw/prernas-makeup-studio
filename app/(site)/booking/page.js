'use client'

import Link from "next/link";
import Serviceselector from "./components/serviceSelector";
import Timestable from "./components/times";
import Calendarcomp from "./components/calendar";
import Partysize from "./components/partySize";
import { useState, useEffect } from "react";
import { handleAppointmentWrite } from "./action";
import { clearAppointments } from "./action";
import emailjs from "@emailjs/browser";
import { client } from "@/sanity/lib/client";

export default function BookingPage() {
  emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    })

  let [name, setName] = useState("")
  let [lastName, setLastName] = useState("")
  let [email, setEmail] = useState("")
  let [service, setService] = useState("")
  let [date, setDate] = useState()
  let [partySize, setPartySize] = useState("")
  let [time, setTime] = useState("")

  async function submit() {
    handleAppointmentWrite(date, time)
    const booking = {
      message: (`New Appointment!\nName: ${name} ${lastName}\nContact: ${email}\nService: ${service}\n
        Date (YYYY-MM-DD): ${date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0')}
        \nTime: ${time}\nParty Size: ${partySize}`),
      recipient: "padduglamhaven@gmail.com",
      reply: email,
      from: name,
      subject: "NEW APPOINTMENT ",
    }
    const receipt = {
      message: (`Hi ${name} ${lastName},\nThank you for booking an appointment with Paddu's Glam Haven, see below your
        booking receipt for your own bookkeeping.\n\nName: ${name} ${lastName}\nContact: ${email}\nService: ${service}\n
        Date (YYYY-MM-DD): ${date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0')}
        \nTime: ${time}\nParty Size: ${partySize}`),
      recipient: email,
      reply: "padduglamhaven@gmail.com",
      from: "Paddu's Glam Haven",
      subject: "Booking Receipt For Appointment With Paddu's Glam Haven",
    }
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_MESSAGE_ID, booking)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
       console.log('FAILED...', error);
    });
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_MESSAGE_ID, receipt)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
       console.log('FAILED...', error);
    });
    document.getElementById("submit1").style.setProperty('display', 'none')
    document.getElementById("success1").style.setProperty('display', 'block')
    document.getElementById("submit2").style.setProperty('display', 'none')
    document.getElementById("success2").style.setProperty('display', 'block')
  }

  async function clear_appts() {
    const query = `*[_type=="appointment"] {
      day,
      times,
      _id
    }`

    const appointments = await client.fetch(query)
    for (let i = 0; i < appointments.length; i++) {
      if (new Date(appointments[i].day) < new Date()) {
        clearAppointments(appointments[i]._id)
      }
    }
  }

  const handlename = (e) => {
    setName(e.target.value)
  }

  const handlelastname = (e) => {
    setLastName(e.target.value)
  }

  const handleemail = (e) => {
    setEmail(e.target.value)
  }

  const handleservice = (e) => {
    setService(e)
  }

  const handledate = (e) => {
    setDate(e)
    setTime("")
  }

  const handlepartysize = (e) => {
    setPartySize(e)
  }

  const handletime = (e) => {
    setTime(e)
  }

  clear_appts()

  return (
    <div>
      {/*full screen section*/}
      <div className="items-center flex-col w-full md:flex hidden">
        <h1 style={{ fontFamily: '"Playfair Display", serif' }} className="font-serif text-4xl md:text-6xl text-brand-purple pt-[15vh] pb-[5vh]">
          Ready to book your look?
        </h1>
        <p className="text-brand-purple-light mb-[5vh] text-center text-xl block">
          Choose your service, pick a date, and book your beauty session in just a few clicks. <br /> It's fast and easy.
        </p>
        <form className="grid grid-cols-2 gap-x-[2vw] gap-y-[4vh] w-[50vw] grid-rows-[5vh_10vh_8vh_10vh_0vh_5vh_30vh_10vh_auto] items-center ">
          <p className="text-brand-purple-dark text-left row-start-1 text-xl">
            <b>Name (Required)</b>
          </p>
          <label className="text-brand-purple-light col-start-1 row-start-2 text-left">First Name<span className="text-red-500">*</span></label>
          <input type="text" onChange={handlename} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3 col-start-1 col-end-1" />
          <label className="text-brand-purple-light col-start-2 col-end-2 row-start-2 row-end-2 text-left">Last Name<span className="text-red-500">*</span></label>
          <input type="text" onChange={handlelastname} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3 col-start-2" />
          <label className="text-brand-purple-light text-left row-start-4 row-end-4 mt-[3vh]">Email<span className="text-red-500">*</span></label>
          <input type="text" onChange={handleemail} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-5 row-end-5 col-start-1 col-span-2 w-full" />
          <label className="text-brand-purple row-start-6 text-left mt-[10vh] text-xl col-span-2 w-full"><b>SELECT A SERVICE</b></label>
          <Serviceselector className="row-start-7 col-start-1 col-span-2 w-full ml-0" onValueChange={handleservice} />
          <label className="text-brand-purple row-start-8 text-left col-start-1 col-span-2"><b>SELECT A DATE</b></label>
          <Calendarcomp className="col-start-1 col-end-1 row-start-9 row-span-2 h-full w-[108.5%] mt-[-5.9vh] border-brand-gold border-t-1 border-r-1" onValueChange={handledate} />
          <div className="row-start-9 col-start-2 flex flex-col mt-[-3vh]">
            <Partysize className="w-full z-1" onValueChange={handlepartysize} />
            <Timestable className="w-full" onValueChange={handletime} day={date} />
          </div>
          <button type="button" id="submit1" onClick={() => submit()} className="row-start-11 col-span-2 bg-brand-purple-dark justify-self-center text-white rounded w-[8vw] h-[4vh] mb-[10vh]">Submit</button>
        </form>
        <p id="success1" className="text-2xl text-white rounded bg-brand-purple hidden mb-[5vh]">Thank You For Booking With Us!</p>
      </div>

      {/*mobile version*/}
      <div className="flex items-center flex-col w-full md:hidden">
        <h1 style={{ fontFamily: '"Playfair Display", serif' }} className="font-serif text-4xl md:text-6xl text-brand-purple pt-[15vh] pb-[5vh]">
          Ready to book your look?
        </h1>
        <p className="text-brand-purple-light mb-[5vh] text-center text-xl">
          Choose your service, pick a date, and book <br /> your beauty session in just a few clicks. <br /> It's fast and easy.
        </p>
        <form className="flex w-[100%] items-center flex-col">
          <label className="text-brand-purple text-xl text-center w-screen"><b>SELECT A SERVICE<span className="text-red-500">*</span></b></label>
          <Serviceselector className="w-[60vw] ml-[-2vw] mb-[10vh]" onValueChange={handleservice} k={40} dropSize="w-[60vw]"/>
          <label className="text-brand-purple text-center"><b>SELECT A DATE</b></label>
          <Calendarcomp className="w-[60vw]" onValueChange={handledate} k={40} />
          <div className="flex md:flex-col flex-col-reverse">
            <Partysize className="w-[70vw] z-1 mt-[6vh]" onValueChange={handlepartysize} k={40} dropSize="w-[70vw]" attr="border rounded" />
            <Timestable className="w-full h-full" onValueChange={handletime} day={date} attr="w-[20vw]" border="" />
          </div>
          <div className="grid grid-rows-6 grid-cols-2 w-[80vw] mt-[10vh]">
            <p className="text-brand-purple-dark text-left row-start-1">
              <b>Name (Required)</b>
            </p>
            <label className="text-brand-purple-light text-left row-start-2">First Name<span className="text-red-500">*</span></label>
            <input type="text" onChange={handlename} className="border-b-[0.1vh] border-gray-400 outline-0 col-start-1 col-end-1 row-start-3 w-[35vw]" />
            <label className="text-brand-purple-light col-start-2 col-end-2 text-left row-start-2">Last Name<span className="text-red-500">*</span></label>
            <input type="text" onChange={handlelastname} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 col-start-2" />
            <label className="text-brand-purple-light text-left row-start-4 row-end-4 mt-[3vh]">Email<span className="text-red-500">*</span></label>
            <input type="text" onChange={handleemail} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-5 w-[80vw] col-start-1 col-end-2" />
          </div>
          <button type="button" id="submit" onClick={() => submit()} className="row-start-11 col-span-2 bg-brand-purple-dark justify-self-center text-white rounded w-[12vw] h-[4vh] mb-[10vh]">Submit</button>
        </form>
        <p id="success2" className="text-2xl text-white rounded bg-brand-purple hidden mb-[5vh]">Thank You For Booking With Us!</p>
      </div>
    </div>
  );
}
