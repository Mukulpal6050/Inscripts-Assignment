import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import dummyData from "../assets/DummyData.json";
import { IoLink } from "react-icons/io5";
import { PiArrowsSplitBold } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import { FaBriefcase } from "react-icons/fa6";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaGlobe } from "react-icons/fa6";
import { FaHandDots } from "react-icons/fa6";



type JobRequest = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: number|"";
};


const Table = () => {
    const columns = [
        {
            header: "Job Request",
            accessorKey: "jobRequest"
        },
        {
            header: "Submitted",
            accessorKey: "submitted"
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: ({ getValue }: { getValue: () => string }) => {
                const status = getValue();
                const statusColorMap: { [key: string]: string } = {
                "Need to start": "bg-gray-100 text-yellow-800 text-[#475569] ",
                "Complete": "bg-green-100 text-green-800",
                "Blocked": "bg-red-100 text-red-800",
                "In-process": "bg-yellow-100 text-blue-800",
                };
                return (
                <span
                    className={`px-4 py-0.5 text-[8px] rounded-full font-semibold ${
                    statusColorMap[status] || ""
                    }`}
                >
                    {status}
                </span>
                );
            },
        },
        {
            header: "Submitter",
            accessorKey: "submitter"
        },
        {
            header: "URL",
            accessorKey: "url"
        },
        {
            header: "Assigned",
            accessorKey: "assigned"
        },
        {
            header: "Priority",
            accessorKey: "priority",
            cell: ({ getValue }: { getValue: () => string }) => {
                const status = getValue();
                const statusColorMap: { [key: string]: string } = {
                "Medium": " text-yellow-600 ",
                "High": " text-red-800",
                "Low": " text-blue-800",
                };
                return (
                <span
                    className={`font-semibold ${
                    statusColorMap[status] || ""
                    }`}
                >
                    {status}
                </span>
                );
            },
        },
        {
            header: "Due Date",
            accessorKey: "dueDate"
        },
        {
            header: "Est. Value",
            accessorKey: "estValue"
        }
    ]

    const table = useReactTable({
        columns,
        data: dummyData.data as JobRequest[],
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    const getBgColor = (id: string): string => {
        if (["jobRequest", "submitted", "status", "submitter"].includes(id)) {
            return "bg-[#F6F6F6]";
        } else if (id === "assigned") {
            return "bg-[#D2E0D4]";
        } else if (["priority", "dueDate"].includes(id)) {
            return "bg-[#DCCFFC]";
        } else if (id === "estValue") {
            return "bg-[#FAC2AF]";
        } else {
            return "bg-white border border-gray-300";
        }
    };

    const getHeaderCellBg = (id: string): string => {
        if (id === "assigned") {
            return "bg-[#E8F0E9]"
        };
        if (["priority", "dueDate"].includes(id)) {
            return "bg-[#EAE3FC]"
        };
        if (id === "estValue"){
            return "bg-[#FFE9E0]"
        };
        return "bg-[#EEEEEE]";
    };



    return(
        <div className="w-full mt-[20px] overflow-x-auto">
            <div className="min-w-[1280px]">
            </div>
            <table className="w-full table-auto border-collapse text-black">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <React.Fragment key={headerGroup.id}>
                            <tr>
                                <th className="border border-gray-300 px-4 py-1 border-b-0" />
                                {headerGroup.headers.map((header) => (
                                <th key={header.id}
                                    className={`px-4 py-1 text-left text-[12px] text-[#757575] cursor-pointer hover:bg-gray-200 ${getBgColor(header.id)}`}>
                                        {header.id == "jobRequest" ? (
                                            <div className="flex flex-row gap-2 items-center">
                                                <IoLink className="h-4 w-4 text-[#2e86f2]" />
                                                <p className="text-[10px]">Q3 Finacial Overview</p>
                                                <TfiReload className="h-3 w-3 text-[#e37617]" />
                                            </div>
                                        ): header.id == "assigned" ? (
                                            <div className="flex flex-row gap-2 items-center h-full wi-full">
                                                <PiArrowsSplitBold className="h-3 w-3" />
                                                <p className="text-[10px]">ABC</p>
                                            </div>
                                        ) : header.id == "priority" ? (
                                            <div className="flex flex-row gap-2 items-center  h-full wi-full">
                                                <PiArrowsSplitBold className="h-3 w-3" />
                                                <p className="text-[10px]">Answer a Question</p>

                                            </div>
                                        ) : header.id == "estValue" ? (
                                            <div className="flex flex-row gap-2 items-center  h-full wi-full">
                                                <PiArrowsSplitBold className="h-3 w-3" />
                                                <p className="text-[10px]">Extract</p>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                </th>
                                ))}
                            </tr>

                            <tr 
                                key={headerGroup.id}
                                className="min-w-full border-collapse border border-gray-300 "
                            >
                                <th className="text-[14px] text-[#757575]">#</th>
                                {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className={`border border-gray-300 px-4 py-[0.5px] text-left ${getHeaderCellBg(header.id)} text-[10px] font-semibold text-[#757575] cursor-pointer hover:bg-gray-200`}
                                >
                                    {header.id == "jobRequest" ? (
                                        <div className="flex flex-row gap-2 justify-between">
                                            <div className="flex flex-row gap-2">
                                                <FaBriefcase className="h-3 w-3" />
                                                <p>Job Request</p>
                                            </div>
                                            <IoIosArrowDown className="h-3 w-3" />
                                        </div>
                                    ) : header.id == "submitted" ? (
                                        <div className="flex flex-row justify-between gap-2">
                                            <div className="flex flex-row gap-2">
                                                <BsCalendar3WeekFill className="h-3 w-3" />
                                                <p>Submitted</p>
                                            </div>
                                            <IoIosArrowDown className="h-3 w-3" />
                                        </div>
                                    ) : header.id == "status" ? (
                                        <div className="flex flex-row gap-2 justify-between">
                                            <div className="flex flex-row gap-2">
                                                <IoIosArrowDropdownCircle className="h-3 w-3" />
                                            <p>Status</p>
                                            </div>
                                            
                                            <IoIosArrowDown className="h-3 w-3" />
                                        </div>
                                    ) : header.id == "submitter" ? (
                                        <div className="flex flex-row gap-2 justify-between">
                                            <div className="flex flex-row gap-2">
                                                <CgProfile className="h-3 w-3" />
                                                <p>Submitter</p>
                                            </div>
                                            
                                            <IoIosArrowDown className="h-3 w-3" />
                                        </div>
                                    ) : header.id == "url" ? (
                                        <div className="flex flex-row gap-2 justify-between">
                                            <div className="flex flex-row gap-2">
                                                <FaGlobe className="h-3 w-3" />
                                                <p>URL</p>
                                            </div>
                                            
                                            <IoIosArrowDown className="h-3 w-3" />
                                        </div>
                                    ) : header.id == "assigned" ? ( 
                                        <div className="flex flex-row gap-2 justify-between">
                                            <div className="flex flex-row gap-2">
                                                <FaHandDots className="h-3 w-3" />
                                                <p>Assigned</p>
                                            </div>
                                            <IoIosArrowDown className="h-3 w-3" />
                                        </div>
                                    ) : (
                                        flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )
                                    )}

                                </th>
                                ))}
                                <td className="border-dotted border-gray-300 px-4 py-1 text-left text-[12px] text-[#757575] cursor-pointer hover:bg-gray-200">
                                    {" "}
                                    +
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                    
                </thead>

                <tbody>
                    {table.getRowModel().rows.map((row) => (  
                            <tr  key={row.id} className="hover:bg-gray-50 text-[8px]">
                                <td className="border border-gray-300 px-4 py-2">
                                    {Number(row.id) + 1}
                                </td>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} 
                                    className="border border-gray-300 px-4 py-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                                <td className="border border-gray-300 px-4 py-2 min-w-24"></td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
