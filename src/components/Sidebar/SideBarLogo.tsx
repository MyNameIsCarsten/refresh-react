import reactLogo from "../../assets/react.svg";

interface Props {
    expanded?: boolean;
}

function SideBarLogo({expanded}: Props) {
    return (
        <div
            className={`flex justify-center gap-1 font-bold p-4 overflow-hidden transition-all ${expanded ? "w-auto" : "hidden"}`}>
            <span>Refresh</span>
            <img src={reactLogo}
                 alt="Logo"
                 className="animate-spin-slow"
            />
            <span>React</span>
        </div>
    )
}

export default SideBarLogo
