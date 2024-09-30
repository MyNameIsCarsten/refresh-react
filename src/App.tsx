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
import UseEffectPage from "./Pages/UseEffectPage.tsx";
import UseStatePage from "./Pages/UseStatePage.tsx";
import UseReducerPage from "./Pages/UseReducerPage.tsx";
import UseContextPage from "./Pages/UseContextPage.tsx";
import Redux from "./Pages/Redux.tsx";

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
                    <span className="px-3 italic font-medium text-gray-600 ">Chapter 02: Hooks</span>
                    <SidebarItem
                        icon={activeSidebarItem === "useState" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="useState"
                        isActive={activeSidebarItem === "useState"}
                        handleClick={() => handleClickOnSidebarItem("useState")}
                    />
                    <SidebarItem
                        icon={activeSidebarItem === "useEffect" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="useEffect"
                        isActive={activeSidebarItem === "useEffect"}
                        handleClick={() => handleClickOnSidebarItem("useEffect")}
                    />
                    <SidebarItem
                        icon={activeSidebarItem === "useReducer" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="useReducer"
                        isActive={activeSidebarItem === "useReducer"}
                        handleClick={() => handleClickOnSidebarItem("useReducer")}
                    />
                    <SidebarItem
                        icon={activeSidebarItem === "useContext" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="useContext"
                        isActive={activeSidebarItem === "useContext"}
                        handleClick={() => handleClickOnSidebarItem("useContext")}
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
                    <span className="px-3 italic font-medium text-gray-600 ">Chapter 04: Testing</span>
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
                    <span className="px-3 italic font-medium text-gray-600 ">Chapter 05: Redux</span>
                    <SidebarItem
                        icon={activeSidebarItem === "Redux" ? <BookOpen size={20}/> : <Book size={20}/>}
                        text="Redux"
                        isActive={activeSidebarItem === "Redux"}
                        handleClick={() => handleClickOnSidebarItem("Redux")}
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
                        <Route path="/usestate" element={<LessonPage children={
                            <UseStatePage/>
                        }/>}/>
                        <Route path="/useEffect" element={<LessonPage children={
                            <UseEffectPage/>
                        }/>}/>
                        <Route path="/useReducer" element={<LessonPage children={
                            <UseReducerPage/>
                        }/>}/>
                        <Route path="/useContext" element={<LessonPage children={
                            <UseContextPage/>
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
                        <Route path="/redux" element={<LessonPage children={
                            <Redux />
                        }/>} />
                        <Route path="*" element={<NotFoundPage />} /> // default path
                    </Routes>

                </main>
            </Router>
        </div>
    );
}

export default App;
