import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Content from "../layout/content/Content";
import Select from "../Select";

export default function PdfDownload() {
  const certificateRef = useRef();

  const downloadPdf = useReactToPrint({ content: () => certificateRef.current, });

  return (
    <div className="m-auto flex flex-col gap-[1px]">
      <div className="overflow-hidden flex flex-col gap-1" ref={certificateRef}>
        <Select />
        <Content />
      </div>
      <div className="self-end w-full px-10 my-4">
        <button onClick={downloadPdf} className="bg-indigo-800 w-full  text-white rounded-lg  py-3 hover:bg-indigo-700 hover:scale-105 hover:text-lg">
          Download
        </button>
      </div>


    </div>
  );
}
