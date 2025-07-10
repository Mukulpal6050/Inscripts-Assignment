const BottomBar = () => {
    return(
        <div className="bg-white text-gray-500 flex flex-row text-[10px] ml-[9px] border-l-0 gap-3 justify-start px-8 border">
            <p className="px-2 text-[#0e3318] py-0.5 border-r cursor-pointer font-semibold bg-green-200 border-t-2 border-green-600">
                All Orders
            </p>
            <p className="px-2 py-1 border-r cursor-pointer font-semibold">
                Pending
            </p>
            <p className="px-2 py-0.5 border-r cursor-pointer font-semibold">
                Reviewed
            </p>
            <p className="px-2 py-0.5 border-r cursor-pointer font-semibold">
                Arrived
            </p>
            <p className="pl-4 px-2 py-0.5 cursor-pointer font-semibold">+</p>
        </div>
    )
}

export default BottomBar