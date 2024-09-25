import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import H2Element from "../components/H2Element.tsx";

interface Props {}

function UseEffectPage({}: Props) {
    return (
        <div>
            <H1Element text={"useEffect-Hook"} id="" />
            <p>The life of a React components can be split into three stages.</p>
            <ul className="list-disc ml-12">
                <li>It <i>mounts</i> - The component is added to the screen.</li>
                <li>It <i>updates</i> - The component displayed on the screen changes.</li>
                <li>It <i>unmounts</i> - The component is removed from the screen.</li>
            </ul>
            <p>By using the <span className={"code-p"}>useEffect</span>-Hook we can specifically determine what should happen during these stages.
            </p>
            <p>It takes an <span className={"code-p"}>effectFunction</span> as well as an optional <span className={"code-p"}>dependencies</span>-array as arguments.</p>
            <SyntaxHighlighter
                codeString={`useEffect(effectFunction, [dependencies]);`}
            />

            <H2Element text={"Mount"} id="mount" />
            <p>Use an empty <span className={"code-p"}>dependencies</span>-array as the argument, to execute the <span
                className={"code-p"}>effectFunction</span> only on mount of the component.</p>
            <SyntaxHighlighter
                codeString={`useEffect(() => {
    ...
}, []);`}
            />

            <H2Element text={"Update"} id="update" />
            <p>If the <span className={"code-p"}>dependencies</span>-array is filled, the <span
                className={"code-p"}>effectFunction</span> is only executed, when the values within it change.</p>
            <SyntaxHighlighter
                codeString={`useEffect(() => {
    ...
}, [dependencies]);`}
            />

            <H2Element text={"Unmount"} id="unmount" />
            <p>If the <span className={"code-p"}>effectFunction</span> returns another function, this function is executed, when the component is <span
                className={"code-p"}>unmounted</span>.</p>
            <SyntaxHighlighter
                codeString={`useEffect(() => {
    ...
    return () => {
        cleanUpFunction();
    };
}, []);`}
            />
        </div>
    );
}

export default UseEffectPage;
