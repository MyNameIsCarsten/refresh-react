import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";

interface Props {}

function UseContextPage({}: Props) {
    return (
        <div>
            <H1Element text={"useContext-Hook"} id="" />
            <p>By using the <span className={"code-p"}>useContext</span>-Hook we can easily access values that are stored in a <span className={"code-p"}>context</span>, without the need of passing the value via <span className={"code-p"}>props</span>.
            </p>
            <p>First, you need to create the <span className={"code-p"}>context</span> and provide it to the (parent-)component(s) that will need it.</p>
            <SyntaxHighlighter
                codeString={`export const SomeContext = createContext(); //<-- You can pass in a default value if you want to
...
<SomeContext.Provider value={value}>
    <SomeComponent /> // <-- Somewhere in here located will be the component that will access the value from the context
</SomeContext.Provider>`}
            />
            <p>Within the component that wants to access the value you can call:</p>
            <SyntaxHighlighter
                codeString={`const value = useContext(SomeContext);`}
            />
        </div>
    );
}

export default UseContextPage;
