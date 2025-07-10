import Navbar from "./Navbar";
import Toolbar  from "./Toolbar";
import BottomBar from './BottomBar'
import type { ReactNode } from "react";

const TableApp = ({children} : {children: ReactNode}) => {
    return(
        <div className="h-screen w-screen overflow-hidden flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-20">
                <Navbar />
                <Toolbar />
            </div>
            <div className="flex-1 overflow-auto pt-[96px]">
                <div className="w-full h-full">{children}</div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-20">
                <BottomBar />
            </div>
        </div>
    )

}

export default TableApp