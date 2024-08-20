import React from "react";
import { cn } from "../utils/functions";

interface Props {
    text: string | React.ReactNode;
    className?: string;
    onClick: () => void;
}
const Button = ({ text, className, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "border border-blue-500 text-blue-500 w-full rounded-lg font-medium text-lg py-1 hover:scale-105 transition-all duration-100 ease-in-out",
                className
            )}
        >
            {text}
        </button>
    );
};

export default Button;
