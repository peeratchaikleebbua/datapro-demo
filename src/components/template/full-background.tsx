import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface IFullBackGround {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>;
}

const FullBackground = ({ children, className }: IFullBackGround) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-black text-white flex flex-col items-center justify-center p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FullBackground;
