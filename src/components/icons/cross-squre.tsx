import React from "react";

interface ICrossSquare {
    size?: number | string
}

const CrossSquare = ({size = 60}: ICrossSquare) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-cross-square"
    >
      <rect width="20" height="20" x="2" y="2" rx="3" />
      <path d="M14 10V7c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3H7c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h3v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h3c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
    </svg>
  );
};

export default CrossSquare;
