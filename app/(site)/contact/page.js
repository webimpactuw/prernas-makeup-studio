'use client'

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    })

  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  async function submit() {
    const compMessage = {
      message: (`NEW MESSAGE from ${firstName} ${lastName}:\n\n${message}`),
      recipient: "padduglamhaven@gmail.com",
      reply: email,
      from: firstName,
      subject: "NEW MESSAGE",
    }
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_MESSAGE_ID, compMessage)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
       console.log('FAILED...', error);
    });
  }

  return (
    <main>
      {/* ── Contact ── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="pt-14 pb-16 md:pb-24 relative"
      >

        {/* Desktop Flower */}
        <div
          className="hidden md:block absolute right-0 top-1/2 translate-y-25 opacity-80 pointer-events-none rotate-180"
          aria-hidden="true"
        >
          <Image
            src="/images/lily.png"
            alt=""
            width={500}
            height={350}
            className="w-[420px] h-auto"
          />
        </div>

        {/* Mobile Flower */}
        <div
          className="md:hidden absolute right-2 top-6 opacity-70 pointer-events-none rotate-180"
          aria-hidden="true"
        >
          <Image
            src="/images/lily.png"
            alt=""
            width={180}
            height={180}
            className="w-28 h-auto"
          />
        </div>

        {/* Heading + Subtitle */}
        <div className="text-center pb-20 relative z-10">
          <h2
            id="contact-heading"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-4xl md:text-5xl font-semibold text-brand-purple"
          >
            Contact
          </h2>

          <p className="mt-3 text-lg md:text-xl text-brand-purple-light/60 tracking-wide">
            Reach out today!
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <form
            aria-label="Contact form"
            className="space-y-6 w-full"
          >

            {/* Name */}
            <div>
              <p className="font-bold text-brand-purple-dark mb-8">
                Name (Required)
              </p>

              <div className="grid grid-cols-2 gap-4">

                {/* First Name */}
                <div>
                  <label
                    htmlFor="contact-firstname"
                    className="text-sm text-brand-purple-dark block mb-1"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="contact-firstname"
                    type="text"
                    onChange={handleFirstName}
                    required
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="contact-lastname"
                    className="text-sm text-brand-purple-dark block mb-1"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="contact-lastname"
                    type="text"
                    onChange={handleLastName}
                    required
                    className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
                  />
                </div>

              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="text-sm text-brand-purple-dark block mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>

              <input
                id="contact-email"
                type="email"
                onChange={handleEmail}
                required
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-brand-purple transition-colors bg-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="text-brand-purple-dark text-sm font-medium block mb-1"
              >
                Message
              </label>

              <p className="text-gray-400 text-xs mb-2">
                Reach out for any questions or concerns.
              </p>

              <textarea
                id="contact-message"
                rows={5}
                onChange={handleMessage}
                className="w-full bg-[#E6F4F2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 transition-colors resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={() => submit()}
                className="bg-brand-purple-dark text-white font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all"
              >
                Contact
              </button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}