import React, { useEffect, useState } from "react";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Main from "../main/Main";
import Hero from "../hero/Hero";
import SelectPerson from "../select/Select";
import Signature from "../signature/Signature";
export default function PdfDownload() {
  const certificateRef = useRef();

  const downloadPdf = useReactToPrint({ content: () => certificateRef.current, });

  return (
    <div className="m-auto   flex flex-col gap-[1px]">
      <div className="overflow-hidden flex flex-col gap-1" ref={certificateRef}>
    
      <div >
        <SelectPerson />
      </div>
      <Main />
      <Signature />
      </div>
      <div className="self-end w-full px-10 my-4">
        <button onClick={downloadPdf} className="bg-indigo-800 w-full  text-white rounded-lg  py-3 hover:bg-indigo-700 hover:scale-105 hover:text-lg">
          Download
        </button>
      </div>
    
    
    </div>
  );
}
