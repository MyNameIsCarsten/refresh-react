import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";

interface Props {}

function GettingStartedPage({}: Props) {
    return (
        <div>
            <H1Element text={"Quick Start"} id="" />
            <p>
                Create a new <span className={"code-p"}>Vite</span>-
                <span className={"code-p"}>React</span>-
                <span className={"code-p"}>TypeScript</span> project in the current folder:
            </p>
            <SyntaxHighlighter
                codeString={`npm create vite@latest . --template react-ts
npm install`}
            />
            <p>Optionally, you can define the registry, that should be used via <span className={"code-p"}>--registry https://registry.npmjs.org</span></p>
        </div>
    );
}

export default GettingStartedPage;
