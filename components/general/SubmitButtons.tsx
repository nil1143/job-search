"use client";

import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

interface GeneralSubmitButtonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;

    width?: string;
    icon?: ReactNode;
}

const GeneralSubmitButton = ({text, variant, width, icon}: GeneralSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button variant={variant} className={width} disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin " />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          {/* {icon && <div className="">{icon}</div>}
          <span>{text}</span> */}
          {icon && <div className="">{icon}</div>}
          <span>{text}</span>
        </>
      )}
    </Button>
  );
};

export default GeneralSubmitButton;
