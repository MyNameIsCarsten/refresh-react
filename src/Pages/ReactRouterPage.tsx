import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import H2Element from "../components/H2Element.tsx";

interface Props {

}

function ReactRouterPage({  }: Props ) {

    return (

        <div>

            <H1Element text={"React Router"} id=""/>
            <p>First install the <span className={"code-p"}>React-Router</span>:</p>
            <SyntaxHighlighter codeString={`npm install react-router-dom`}/>

            <H2Element text={"Router and Routes"} id="router-and-routes"/>
            <p>Wrap your App into the <span className={"code-p"}>Router</span> and the <span className={"code-p"}>Routes</span> component.</p>
            <p>You can then specify each route, aka. URL, via the <span className={"code-p"}>Route</span> element.</p>
            <SyntaxHighlighter codeString={`function App() {
    return (
        <\div className="App">
            <Router>
                <Routes>
                    // For each path you can define a component
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} /> // default path
                </Routes>
            </Router>
        </\div>
    );
}`}/>
            <H2Element text={"Link"} id="link"/>
            <p>Wherever you would normaly use the <span className={"code-p"}>a</span>-tag, you now have to use the <span
                className={"code-p"}>Link</span>-tag.</p>
            <p>Instead of the <span className={"code-p"}>href</span>-attribute, you simply now declare a <span
                className={"code-p"}>to</span>-attribute.</p>
            <SyntaxHighlighter codeString={`import { Link, Outlet } from "react-router-dom";

<Link to="team">Our Team</Link>`}/>

            <H2Element text={"useNavigate Hook"} id="usenavigate-hook"/>
            <p>Use the <span className={"code-p"}>useNavigate()</span>-Hook to trigger navigation outside of the <span
                className={"code-p"}>Link</span> element.</p>
            <SyntaxHighlighter codeString={`import { useNavigate  } from 'react-router-dom';`}/>
            <p>Then, inside your <span className={"code-p"}>Component</span>, store the returned function.</p>
            <SyntaxHighlighter codeString={`const navigate = useNavigate();`}/>

            <p>And finally trigger it within an <span className={"code-p"}>onClickHandler</span> by calling it with an <span
                className={"code-p"}>URL</span>.</p>
            <SyntaxHighlighter codeString={`const onClickHandler: MouseEventHandler<HTMLElement> = (e) => {
    navigate(linkUrl); // Programmatically navigate to the desired URL
};`}/>

            <H2Element text={"useLocation Hook"} id="uselocation-hook"/>
            <p>Use the <span className={"code-p"}>useLocation()</span>-Hook to access the <span
                className={"code-p"}>window.location</span> object.</p>
            <SyntaxHighlighter codeString={`import { useLocation  } from 'react-router-dom';`}/>
            <p>Then, inside your <span className={"code-p"}>Component</span>, store the returned object.</p>
            <SyntaxHighlighter codeString={`const location = useLocation();`}/>
            <p>Finaly, you can perforn any logic based on e.g. a change of the <span className={"code-p"}>hash</span>.</p>
            <SyntaxHighlighter codeString={`useEffect(() => {
    anyFunction();
}, [location]); // Re-run when the route (location) changes`}/>
        </div>

    )
}

export default ReactRouterPage;
