import React from "react";
import Image from "next/image";

import Contact from "@/public/contact.jpg";

const Contacts = () => {
  return (
    <article className="grid grid-cols-2 gap-8">
      <div>
        <Image src={Contact} height={500} alt="Person on the couch" />
      </div>
      <form className="flex flex-col items-start justify-center gap-4">
        <h1 className="text-2xl">Contact Us!</h1>
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="w-full" />
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="w-full" />
        </div>
        <div className="flex flex-col items-start gap-2 w-full">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" className="w-full"></textarea>
        </div>
        <button className="inline-block bg-teal-500 py-2 px-4 rounded-lg text-white cursor-pointer">
          Send Info
        </button>
      </form>
    </article>
  );
};

export default Contacts;
