import React, { useState } from "react";
import svg from "../assets/upload-svgrepo-com.svg";
import svg2 from "../assets/ai-file-type-svgrepo-com.svg";
import svg3 from "../assets/psd-file-type-svgrepo-com.svg";
import rst from "../assets/align-two-columns-svgrepo-com.svg";
import {
  IdentificationIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

import PageTwo from "./PageTwo";
export default function PageOne() {
  const [showPageTwo, setShowPageTwo] = useState(false);

  const handleNext = () => {
    setShowPageTwo(true);
  };

  if (showPageTwo) {
    return <PageTwo />;
  }
  return (
    <div className="flex  justify-center">
      <div className="flex  pt-4 gap-x-4">
        <div
          style={{ height: "580px" }}
          className="w-400  bg-white rounded-md p-4"
        >
          <h2 className="text-md font-bold text-gray-600 mb-2">
            Recent Studies
          </h2>

          <div
            style={{ width: "250px" }}
            className="border-2  border-gray-300 rounded-lg mb-4 p-2"
          >
            <div className="">
              <div>
                <p className="text-sm text-blue-700 font-bold">
                  "Dog Bite Complaint"
                </p>
              </div>
              <div className="flex pt-2 items-center justify-between ">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-green-600 bg-green-200 ">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div className="">
              <div>
                <p className="text-sm text-blue-700 font-bold">
                  "Cyber bullying conspiracy"
                </p>
              </div>
              <div className="flex pt-2 items-center justify-between ">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-green-600 bg-green-200 ">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div className="">
              <div>
                <p className="text-sm text-blue-700 font-bold">
                  "The data dilemma"
                </p>
              </div>
              <div className="flex pt-2 items-center justify-between ">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-green-600 bg-green-200 ">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div className="">
              <div>
                <p className="text-sm text-blue-700 font-bold">
                  "The data dilemma"
                </p>
              </div>
              <div className="flex pt-2 items-center justify-between ">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold text-right rounded text-orange-600 bg-orange-200 ">
                  in porgress
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-lg mb-4 p-2">
            <div className="">
              <div>
                <p className="text-sm text-blue-700 font-bold">
                  "The data dilemma"
                </p>
              </div>
              <div className="flex pt-2 items-center justify-between ">
                <p className="text-xs font-bold text-gray-500 mr-4">
                  2 days ago
                </p>
                <p className="text-xs font-bold  text-right rounded text-pink-600 bg-pink-200 ">
                  failed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "600px" }}
          className="w-600  bg-white rounded-md p-4"
        >
          <div className="flex gap-2 align-align-items-center">
            <IdentificationIcon className="size-7 mt-1" />
            <h2 className="text-md pt-1 text-gray-700 font-bold">
              Get Complete about case from AI driven research assistance
            </h2>
          </div>
          <textarea
            placeholder="Ex: Land Dispute,Mumbai,recent judgement"
            className="textarea textarea-bordered  bg-white textarea-xs my-2 w-full "
          ></textarea>

          <div className="border-dashed bg-gray-100 border-2 border-gray-400 rounded-lg p-4">
            <div className="flex items-center  justify-center">
              <ArrowUpTrayIcon className="size-10" />
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "5px" }}
            >
              <span className="text-sm font-bold">
                Drag drop here or click here to upload
              </span>
              <label
                htmlFor="file-upload"
                className="flex text-sm font-bold items-center justify-center text-blue-500 underline cursor-pointer hover:text-blue-600 transition duration-300 ml-2"
              >
                Upload file
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  max="1"
                />
              </label>
            </div>
            <p className="text-xs text-gray-500 font-bold mt-5 text-center">
              Maximum uploads: 1
            </p>
            <p className="text-xs text-gray-400  font-bold mt-2 text-center">
              File format: pdf, jpg, jpeg, png
            </p>
          </div>

          <div className="flex  p-4">
            <h3>Uploaded files</h3>
            <div className="badge ml-4 badge-sm mt-1 badge-info gap-2">3/5</div>
          </div>
          <div className="border-2  mb-4 border-gray-100 bg-gray-100 rounded-lg px-2 flex items-center">
            <img src={svg2} alt="not found" className="w-6" />
            <p className="text-sm  font-bold text-gray-500">
              Case document.pdf{" "}
            </p>
            <div className="ml-auto pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <div className="border-2  mb-4 border-gray-100 bg-gray-100 rounded-lg px-2 flex items-center">
            <img src={svg3} alt="not found" className="w-6" />
            <p className="text-sm  font-bold text-gray-500">
              Case document.pdf{" "}
            </p>
            <div className="ml-auto pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div className="border-2  mb-4 border-gray-100 bg-gray-100 rounded-lg px-2 flex items-center">
            <img src={svg3} alt="not found" className="w-6" />
            <p className="text-sm  font-bold text-gray-500">
              Case document.pdf{" "}
            </p>
            <div className="ml-auto pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-end pt-24">
            <div className="flex-grow"></div>
            <button
              onClick={handleNext}
              className="px-12 rounded-full text-sm font-bold text-white py-1 bg-gradient-to-r to-[#025BD4] from-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
