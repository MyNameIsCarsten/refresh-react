interface Props {
    expanded?: boolean;
}

function SideBarBottom({expanded}: Props) {
    return (
        <div
            data-testid="side-bar-bottom"
            className={`border-t flex p-3 overflow-hidden transition-all ${expanded ? "w-52" : "hidden"}`}>
            <div className={`flex justify-between items-center transition-all w-52 ml-3`}>
                <a href="https://github.com/MyNameIsCarsten" className={`flex justify-between items-center transition-all`}>
                    <div className="leading-4">

                        <h4 className="font-semibold">Made With Love</h4>
                        <span className="text-xs text-gray-600">by MyNameIsCarsten
                        </span>

                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#00D8FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-3"
                        >
                        <path
                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SideBarBottom
