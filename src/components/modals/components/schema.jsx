import { CgLoadbar } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Schema(props) {
    const [usernameOpen, setusernameOpen] = useState(false);
    return (
        <>
            <div
                className={`border-gray-400 rounded border py-3 lg:w-3/4 w-full transition duration-500 overflow-hidden ${usernameOpen ? "h-fit" : "h-18"
                    }`}
            >
                <div className="px-5 py-3 border-b border-gray-300 flex justify-between">
                    <h2 className="font-bold text-xl">
                        UserName{" "}
                        <span className="font-normal text-sm text-gray-600">
                            required
                        </span>
                    </h2>
                    <div className="flex">
                        <i className="text-lg rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200">
                            <CgLoadbar />
                        </i>
                        <i
                            className={`text-xl font-bold rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200 cursor-pointer ${usernameOpen ? "rotate-180" : ""
                                }`}
                            onClick={() => {
                                setusernameOpen(!usernameOpen);
                            }}
                        >
                            <IoIosArrowDown />
                        </i>
                    </div>
                </div>
                <div className="flex w-full px-3 py-1 justify-between items-end flex-wrap">
                    <div className="lg:w-sectwo lg:mb-0 mb-1">
                        <p className="text-gray-900 text-lg ml-4 mb-1">
                            Filled Name{" "}
                            <span className="text-sm text-gray-500 font-thin">
                                required
                            </span>
                        </p>
                        <input
                            type="text"
                            className="input w-full border text-gray-800 focus:outline-none text-sm border-gray-300 rounded-sm"
                            placeholder="UserName"
                        />
                    </div>
                    <div className="flex w-40 bg-gray-200 p-3 rounded-sm items-center">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm rounded-sm no-animation mr-2"
                        />
                        <p className="text-sm">Required</p>
                    </div>
                </div>{" "}
                <br />
                <div className="flex w-full px-3 py-1 justify-between items-end flex-wrap">
                    <div className="w-sectwo lg:mb-0 mb-1">
                        <p className="text-gray-900 text-lg ml-4 mb-1">Filled Type</p>
                        <select className="input w-full border text-gray-800 focus:outline-none text-sm border-gray-300 rounded-sm">
                            <option value="Text">Text</option>
                        </select>
                    </div>
                    <div className="flex w-40 bg-gray-200 p-3 rounded-sm items-center">
                        <input
                            type="checkbox"
                            className="checkbox checkbox-sm rounded-sm no-animation mr-2"
                        />
                        <p className="text-sm">Unique</p>
                    </div>
                </div>{" "}
                <br />
                <div className="flex w-full px-3 py-1 justify-between items-end flex-wrap">
                    <div className="lg:w-sectwo lg:mb-0 mb-1">
                        <p className="text-gray-900 text-lg ml-4 mb-1">
                            Error Message{" "}
                            <span className="text-sm text-gray-500 font-thin">
                                required
                            </span>
                        </p>
                        <input
                            type="text"
                            className="input w-full border text-gray-800 focus:outline-none text-sm border-gray-300 rounded-sm"
                            placeholder="Error Message"
                        />
                    </div>
                    <select className="flex w-40 bg-gray-200 p-3 focus:outline-none rounded-sm items-center">
                        <option value="Match filled">Match filled</option>
                    </select>
                </div>
            </div>{" "}
            <br />
            <div className="border border-gray-400 rounded py-3 lg:w-3/4 w-full">
                <div className="px-5 flex justify-between">
                    <h2 className="font-bold text-xl">
                        Password{" "}
                        <span className="font-normal text-sm text-gray-600">
                            required
                        </span>
                    </h2>
                    <div className="flex">
                        <i className="text-lg rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200">
                            <CgLoadbar />
                        </i>
                        <i className="text-xl font-bold rounded-full p-2 flex justify-center items-center transition duration-200 hover:bg-gray-200 hover:rotate-180 cursor-pointer">
                            <IoIosArrowDown />
                        </i>
                    </div>
                </div>
            </div>
        </>
    )
}