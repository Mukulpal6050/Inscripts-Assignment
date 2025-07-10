import panelIcon from '../assets/panel.png';
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

const GraterThan = () => {
        return <p className="mx-2">{">"}</p>;
    }

const SearchBar = () => {
    return (
        <div className='h-8 bg-[#F6F6F6] rounded-lg flex flex-row items-center  border-separate border-spacing-0.1  gap-4 px-4 text-xs text-gray-600' >
            <IoIosSearch className='text-gray-500 text-xs h-[20px] w-[20px]' />
            <input type="text" placeholder='Search within Sheet' height={12} width={12} className='text-[14px] bg-transparent'/>
        </div>
    )
}
const Navbar = () => {
    
    return(
        <div className="h-[56px] border absolute top-0 left-0 right-0 flex flex-row justify-between items-center  px-2 bg-white">
            <div className="flex flex-row gap-4 items-center mx-2 cursor-pointer">
                <img src={panelIcon} alt="Panel Icon" className="h-[30px] w-[30px] text-[red]" />
                <div className="text-gray-500 text-[14px] text-xs flex flex-row font-semibold items-center ">
                    <p>workspace</p>
                    <GraterThan />
                    <p>folder-2</p>
                    <GraterThan />
                    <p className="text-black ">Spreadsheet 3</p>
                    <BsThreeDots className='ml-[10px] text-[13px] items-center justify-center' />
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <SearchBar />
                <div className="relative w-fit">
                    <IoMdNotificationsOutline className='h-[30px] w-[30px]' />
                    <p className="absolute -top-2 -right-2  font-bold text-white bg-[#4B6A4F] rounded-full px-1.5  text-[10px]">
                        2
                    </p>
                </div>
                <div className=" flex flex-row mr-[20px]">
                    <img src="https://i.pravatar.cc/150?img=3" alt="User Avatar" className="h-[30px] w-[30px] rounded-full cursor-pointer" /> 
                    <div className="flex flex-col text-black px-2 text-left">
                        <p className="text-black font-semibold text-xs">John Deo</p>
                        <p className="text-xs">John Deo...</p>    
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Navbar;