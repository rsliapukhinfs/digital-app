import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  link: string;
};

const Button = ({ text, link }: Props) => {
  return (
    <Link href={link}>
      <button className="inline-block bg-teal-500 py-4 px-8 rounded-lg text-white cursor-pointer">
        {text}
      </button>
    </Link>
  );
};

export default Button;
