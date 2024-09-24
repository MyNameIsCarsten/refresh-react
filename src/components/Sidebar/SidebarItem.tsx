import { MouseEventHandler, useContext } from "react";
import { SidebarContext } from "./Sidebar.tsx";
import { Link, useNavigate  } from 'react-router-dom';

interface Props {
    icon: any,
    text: string,
    isActive?: boolean,
    handleClick: MouseEventHandler<HTMLLIElement>
}

function SidebarItem({ icon, text, isActive, handleClick }: Props) {
    const context = useContext(SidebarContext);
    const navigate = useNavigate();

    // Handle the case where SidebarContext is undefined
    if (!context) {
        throw new Error("SidebarItem must be used within a SidebarProvider");
    }

    const { expanded } = context;

    const linkUrl = text.toLowerCase().replace(/\s+/g, '-');

    // This is necessary to not limit navigation to the Link element but instead to the whole <li> element
    const onClickHandler: MouseEventHandler<HTMLLIElement> = (e) => {
        handleClick(e); // Call the provided click handler if necessary
        navigate(linkUrl); // Programmatically navigate to the desired URL
    };

    return (
        <li
            data-testid="sidebar-item"
            className={`
                relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
                ${
                isActive && expanded
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
            }
            `}
            onClick={onClickHandler}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                <Link to={linkUrl}>{text}</Link>
            </span>
            {!expanded && (
                <div
                    className={`
                        absolute left-full rounded-mx px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 
                        invisible opacity-20 -translate-x-3 transition-all duration-500 group-hover:visible 
                        group-hover:opacity-100 group-hover:translate-x-0
                        ${expanded ? "pointer-events-none" : "pointer-events-auto"}
                    `}
                >
                    {text}
                </div>
            )}
        </li>
    );
}

export default SidebarItem;
