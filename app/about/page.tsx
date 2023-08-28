import React from "react";
import Image from "next/image";

import AboutImg from "@/public/about.jpg";

const About = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <article>
        <Image src={AboutImg} height={500} alt="Person working" />
      </article>
      <article className="flex flex-col gap-4">
        <h2 className="text-2xl text-teal-500 text-center">
          We are working for you!
        </h2>
      </article>
    </section>
  );
};

export default About;
