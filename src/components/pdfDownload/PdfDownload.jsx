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
    <div className="m-auto mt-6 flex flex-col gap-[1px]">
      <div className="overflow-hidden flex flex-col gap-1" ref={certificateRef}>
      <Hero />
      <div className='w-full flex justify-end'>
        <SelectPerson />
      </div>
      <Main />
      <Signature />
        {/* this is the content that will be printed */}
      </div>
      <div className="download-container self-center">
        <button onClick={downloadPdf} className="bg-slate-200 rounded-lg px-[10px] py-[6px]">
          Download
        </button>
      </div>
    
      <style>
        {`
          @media print {
            @page {
              size: 238mm 372mm;
            }
          }
        `}
      </style>
    </div>
  );
}
