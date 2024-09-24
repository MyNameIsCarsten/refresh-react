import React from "react";

interface PageNavigationLinkProps {
    index: number;
    activeSection: string;
    sectionTitle: string;
    handleClick: (hash: string) => void;
}

const PageNavigationLink: React.FC<PageNavigationLinkProps> = ({ index, activeSection, sectionTitle, handleClick }) => {
    let hash = '';
    if (sectionTitle) {
        hash = `#${sectionTitle.toLowerCase().replace(/\s+/g, '-')}`; // Ensure sectionTitle is not undefined
    }

    return (
        <li
            key={index}
            className={`text-sm px-2 rounded-s-xl ${activeSection === hash ? "bg-indigo-100" : ""}`}
        >
            <a
                className={`text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2 ${
                    activeSection === hash ? "font-bold" : ""
                }`}
                href={hash}
                onClick={() => handleClick(hash)}
            >
                {sectionTitle || "Untitled Section"} {/* Add fallback for missing title */}
            </a>
        </li>
    );
};


export default PageNavigationLink;
