import React, { useEffect, useState } from "react";
import PageNavigationLink from "./PageNavigationLink.tsx";
import {useLocation} from "react-router-dom";

interface PageNavigationProps {}

const PageNavigation: React.FC<PageNavigationProps> = () => {
    const [activeSection, setActiveSection] = useState<string>(window.location.hash || "");
    const [sections, setSections] = useState<string[]>([]);
    const location = useLocation(); // Use location to detect route changes

    // Function to handle clicking a nav link
    const handleClick = (hash: string) => {
        window.history.pushState(null, "", hash); // Updates the URL without reloading the page
        setActiveSection(hash);
    };

    // Query all h2 elements and update the sections list dynamically
    const updateSections = () => {
        const h2Elements = document.querySelectorAll("h2"); // Query all H2 elements
        const sectionTitles = Array.from(h2Elements).map((element) => element.innerText);
        if(sectionTitles[sectionTitles.length - 1] === "ON THIS PAGE") {
            sectionTitles.pop()// ; // Remove ON THIS PAGE h2
        }
        setSections(sectionTitles); // Set the sections list
    };

    // Run updateSections whenever the location (route) changes
    useEffect(() => {
        updateSections();
    }, [location]); // Re-run when the route (location) changes

    // Update the active section on page load or hash change
    useEffect(() => {
        const updateActiveSection = () => {
            const currentHash = window.location.hash || "";
            if (currentHash === "" && sections.length > 0 && sections[0] !== undefined) {
                setActiveSection(`#${sections[0].toLowerCase().replace(/\s+/g, '-')}`);
            } else {
                setActiveSection(currentHash);
            }
        };

        updateActiveSection();

        // Listen for changes in the URL hash
        window.addEventListener("hashchange", updateActiveSection);

        return () => {
            window.removeEventListener("hashchange", updateActiveSection); // Cleanup on unmount
        };
    }, [sections]); // Run once after the component mounts, and when sections update

    return (
        <div className="hidden xl:block sticky self-start top-12">
            <nav className="lg:col-start-2 2xl:col-start-3">
                {sections.length > 0 && <h2 className="mb-3">ON THIS PAGE</h2>}
                <div className="h-full overflow-y-auto ps-4 max-h-[calc(100vh-7.5rem)]">
                    <ul className="space-y-2 pb-16">
                        {sections.map((sectionTitle, index) => (
                            <PageNavigationLink
                                key={index}
                                index={index}
                                activeSection={activeSection !== "" ? activeSection : sections[0]}
                                sectionTitle={sectionTitle}
                                handleClick={handleClick}
                            />
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default PageNavigation;
