import Image from "next/image";

import Hero from "@/public/hero.png";
import Button from "@/utils/Button";

export default function Home() {
  return (
    <main className="grid grid-cols-2 items-center">
      <section className="flex flex-col gap-8 items-start">
        <h1 className="text-7xl bg-gradient-to-br from-red-500 to-teal-500 bg-clip-text text-transparent">
          Best digital products at one place
        </h1>
        <p>
          Stop searching for different sources. We will get you everything you
          need
        </p>
        <Button text="Start" link="/portfolio" />
      </section>
      <section className="bg-red-500">
        <Image src={Hero} alt="Gamepad" />
      </section>
    </main>
  );
}
