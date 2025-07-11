import { FaRegEyeSlash } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { IoFilterOutline } from "react-icons/io5";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { PiArrowsSplitBold } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
interface DoubleGreaterSYmbolProps {
    className?: string;
}


const Toolbar = () => {

    const hideFieldButton = () => {
        return(
            console.log("Hide Field Button is clicked")
        )
    }

    const sortButtonClick = () => {
        return(
            console.log("Sort Button is Clicked")
        )
    }

    const filterButtonClick = () => {
        return (
            console.log("Filter Button is Clicked")
        )
    }

    const cellViewButtonClick = () => {
        return(
            console.log("Cell View Button is Clicked")
        )
    }

    const importButtonClick = () => {
        return(
            console.log("Import Button is Clicked")
        )
    }

    const exportButtonClick = () => {
        return (
            console.log("Export Button is Clicked")
        )
    }

    const shareButtonClick = () => {
        return(
            console.log("Share Button is Clicked")
        )
    }

    const newActionButtonClick = () => {
        return (
            console.log("New Action Button is Clicked")
        )
    }

    return(
        <div className="text-black flex absolute top-[56px] border-solid bg-white right-0 left-0 flex-row justify-between px-4 text-xs py-2">
            <div className="flex flex-row justify-between items-center gap-4 ">
                <p className="flex flex-row items-center">Tool bar
                    <MdKeyboardDoubleArrowRight className="h-4 w-4" />
                </p>
                <p className="text-[#888a89]">|</p>
                <button className="flex flex-row items-center gap-3" onClick={hideFieldButton}>
                    <FaRegEyeSlash className="h-4 w-4" />
                    Hide fields
                </button>
                <button className="flex flex-row items-center gap-3" onClick={sortButtonClick}>
                    <LuArrowUpDown className="h-4 w-4" />
                    Sort
                </button>
                <button className="flex flex-row items-center gap-3" onClick={filterButtonClick}>
                    <IoFilterOutline className="h-4 w-4" />
                    Filter
                </button>
                <button className="flex flex-row items-center gap-2" onClick={cellViewButtonClick}>
                    <TbArrowAutofitHeight className="h-4 w-4" />
                    Cell view
                </button>
            </div>
            <div className="flex flex-row justify-between gap-[8px]">
                <button onClick={importButtonClick} className="py-[10px] flex flex-row items-center gap-2 border rounded-md px-2 hover:border-black">
                    <LuArrowDownToLine className="h-4 w-4" />
                    Import
                </button>
                <button onClick={exportButtonClick} className="py-[10px] flex flex-row items-center gap-2 border rounded-md px-2 hover:border-black">
                    <LuArrowUpToLine className="h-4 w-4" />
                    Export
                </button>
                <button onClick={shareButtonClick} className="py-[10px] flex flex-row items-center gap-2 border rounded-md px-2 hover:border-black">
                    <FaRegShareFromSquare className="h-4 w-4" />
                    Share
                </button>
                <button onClick={newActionButtonClick} className="py-[10px] flex flex-row items-center gap-2 border bg-[#426b2f] text-[white] rounded-md px-2 hover:border-black">
                    <PiArrowsSplitBold className="h-4 w-4" />
                    New Action
                </button>
            </div>

        </div>
        
    )
}

export default Toolbar;
