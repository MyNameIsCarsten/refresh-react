import Sidebar from "./components/Sidebar/Sidebar.tsx";
import SidebarItem from "./components/Sidebar/SidebarItem.tsx";
import { Book, BookOpen, LifeBuoy, Settings } from "lucide-react";
import { useState } from "react";
import LessonPage from "./components/LessonPage.tsx";
import GettingStartedPage from "./Pages/GettingStartedPage.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import ReactRouterPage from "./Pages/ReactRouterPage.tsx";
import StylingPage from "./Pages/StylingPage.tsx";
import VitestSetup from "./Pages/VitestSetup.tsx";
import VitestTesting from "./Pages/VitestTesting.tsx";
import JestDomMatchersPage from "./Pages/JestDomMatchersPage.tsx";
import InteractionTesting from "./Pages/InteractionTesting.tsx";
import MockingComponents from "./Pages/MockingComponents.tsx";
import LifecyclePage from "./Pages/LifecyclePage.tsx";

function App() {
    const [activeSidebarItem, setActiveSidebarItem] = useState('');
    const [expanded, setExpanded] = useState(true);

    const handleClickOnSidebarItem = (text: string) => {
        setActiveSidebarItem(text);
    };

    return (
        <div id="App" className="flex" data-testid="App">
            <Router>
                <Sidebar expanded={expanded} setExpanded={setExpanded}>
                    <SidebarItem
                        icon={activeSidebarItem === "Getting Started" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Getting Started"
                        isActive={activeSidebarItem === "Getting Started"}
                        handleClick={() => handleClickOnSidebarItem("Getting Started")}
                    />
                    <hr className="my-3"/>
                    <span className="px-3 italic font-medium text-gray-600 ">Chapter 01</span>
                    <SidebarItem
                        icon={activeSidebarItem === "Styling" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Styling"
                        isActive={activeSidebarItem === "Styling"}
                        handleClick={() => handleClickOnSidebarItem("Styling")}
                    />
                    <hr className="my-3"/>
                    <span className="px-3 italic font-medium text-gray-600 ">Chapter 02</span>
                    <SidebarItem
                        icon={activeSidebarItem === "Lifecycles" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Lifecycles"
                        isActive={activeSidebarItem === "Lifecycles"}
                        handleClick={() => handleClickOnSidebarItem("Lifecycles")}
                    />
                    <hr className="my-3"/>
                    <span className="px-3 italic font-medium text-gray-600 ">Chapter 03</span>
                    <SidebarItem
                        icon={activeSidebarItem === "React Router" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="React Router"
                        isActive={activeSidebarItem === "React Router"}
                        handleClick={() => handleClickOnSidebarItem("React Router")}
                    />
                    <hr className="my-3"/>
                    <span className="px-3 italic font-medium text-gray-600 ">Chapter 04</span>
                    <SidebarItem
                        icon={activeSidebarItem === "Setting up Vitest" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Setting up Vitest"
                        isActive={activeSidebarItem === "Setting up Vitest"}
                        handleClick={() => handleClickOnSidebarItem("Setting up Vitest")}
                    />
                    <SidebarItem
                        icon={activeSidebarItem === "Testing with Vitest" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Testing with Vitest"
                        isActive={activeSidebarItem === "Testing with Vitest"}
                        handleClick={() => handleClickOnSidebarItem("Testing with Vitest")}
                    />
                    <SidebarItem
                        icon={activeSidebarItem === "jest-dom Matchers with Vitest" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="jest-dom Matchers with Vitest"
                        isActive={activeSidebarItem === "jest-dom Matchers with Vitest"}
                        handleClick={() => handleClickOnSidebarItem("jest-dom Matchers with Vitest")}
                    />
                    <SidebarItem
                        icon={activeSidebarItem === "Interaction Testing" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Interaction Testing"
                        isActive={activeSidebarItem === "Interaction Testing"}
                        handleClick={() => handleClickOnSidebarItem("Interaction Testing")}
                    />
                    <SidebarItem
                        icon={activeSidebarItem === "Mocking Components" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Mocking Components"
                        isActive={activeSidebarItem === "Mocking Components"}
                        handleClick={() => handleClickOnSidebarItem("Mocking Components")}
                    />
                    <hr className="my-3"/>
                    <SidebarItem
                        icon={<Settings size={20}/>}
                        text="Settings"
                        isActive={activeSidebarItem === "Settings"}
                        handleClick={() => handleClickOnSidebarItem("Settings")}
                    />
                    <SidebarItem
                        icon={<LifeBuoy size={20}/>}
                        text="Help"
                        isActive={activeSidebarItem === "Help"}
                        handleClick={() => handleClickOnSidebarItem("Help")}
                    />
                </Sidebar>

                <main className={`flex justify-center items-center w-full ${expanded ? "ml-[288px]" : ""} `}>

                    <Routes>
                        <Route path="/" element={<LessonPage children={
                            <GettingStartedPage/>
                        }/>}/>
                        <Route path="/getting-started" element={<LessonPage children={
                            <GettingStartedPage/>
                        }/>}/>
                        <Route path="/styling" element={<LessonPage children={
                            <StylingPage/>
                        }/>}/>
                        <Route path="/lifecycles" element={<LessonPage children={
                            <LifecyclePage/>
                        }/>}/>
                        <Route path="/react-router" element={<LessonPage children={
                            <ReactRouterPage />
                        }/>} />
                        <Route path="/setting-up-vitest" element={<LessonPage children={
                            <VitestSetup />
                        }/>} />
                        <Route path="/testing-with-vitest" element={<LessonPage children={
                            <VitestTesting />
                        }/>} />
                        <Route path="/jest-dom-matchers-with-vitest" element={<LessonPage children={
                            <JestDomMatchersPage />
                        }/>} />
                        <Route path="/interaction-testing" element={<LessonPage children={
                            <InteractionTesting />
                        }/>} />
                        <Route path="/mocking-components" element={<LessonPage children={
                            <MockingComponents />
                        }/>} />
                        <Route path="*" element={<NotFoundPage />} /> // default path
                    </Routes>

                </main>
            </Router>
        </div>
    );
}

export default App;
