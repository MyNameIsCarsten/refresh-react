import { ChevronFirst, ChevronLast } from "lucide-react";
import React, {createContext} from "react";
import SideBarLogo from "./SideBarLogo.tsx";
import SideBarBottom from "./SideBarBottom.tsx";

interface SidebarContextType {
    expanded: boolean;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface Props {
    children?: React.ReactNode;
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
}

function Sidebar({ children, expanded, setExpanded }: Props) {
    return (
        <aside className="h-screen sm:relative sticky top-0">
            <nav className={`${expanded ? "h-full bg-slate-100" : ""} w-fit flex flex-col fixed h-screen`} data-testid="sidebar-nav">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <SideBarLogo expanded={expanded} />

                    <button
                        data-testid="sidebar-toggle"
                        onClick={() => setExpanded(!expanded)}
                        className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst/> : <ChevronLast/>}
                    </button>
                </div>

                <SidebarContext.Provider value={{expanded}}>
                    {/* Updated container to ensure scrolling works */}
                    <div className="flex-1 px-3 overflow-y-auto h-0">
                        <ul className={`${expanded ? "w-auto" : "hidden"} space-y-2`}>{ children }</ul>
                    </div>
                </SidebarContext.Provider>

                <SideBarBottom expanded={expanded} />
            </nav>
        </aside>
    );
}

export default Sidebar;
