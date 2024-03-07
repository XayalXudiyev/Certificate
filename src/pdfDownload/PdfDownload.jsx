import { Routes,Route } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Course from "../course/Course";
import Normal from "../intern/normal/Normal";
import Honors from "../intern/honors/Honors";




export default function PdfDownload() {
  const certificateRef = useRef();
  const downloadPdf = useReactToPrint({ content: () => certificateRef.current, });
  return (
    <div className="">
      <div className="" ref={certificateRef}>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/intern/normal" element={<Normal />} />
          <Route path="/intern/honors" element={<Honors />} />
        </Routes>
      </div>

      <div className="self-end w-full px-10 my-4">
        <button onClick={downloadPdf} className="w-full my-3" >
          <a href="#_" className=" relative w-96 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0  left-0 w-96 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-96 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0  left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease w-96">Download</span>
          </a>
        </button>
        <h1 className="mt-2">&copy; 2024 by Xəyal C. Xudiyev</h1>
      </div>
    </div>
  );
}
