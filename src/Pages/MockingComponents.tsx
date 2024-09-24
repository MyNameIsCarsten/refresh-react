import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";

interface Props {}

function MockingComponents({}: Props) {
    return (
        <div>
            <H1Element text={"Mocking Components"} id=""/>
            <p>Whenever we want to get rid of a component that is not relevant for our current unit-test we can mock it.</p>
            <p><span className={"code-p"}>vi.mock</span> gets a <span className={"code-p"}>path</span> and a <span
                className={"code-p"}>factory</span>-parameter.</p>
            <p>The <span className={"code-p"}>factory</span>-parameter overrides what is returned from the module.</p>
            <p>In the example below, we define the <span className={"code-p"}>default</span>-export from the module to be a function that takes in a parameter called <span
                className={"code-p"}>profileId</span> and that returns a string with the parameter inserted into it.</p>
            <SyntaxHighlighter
                codeString={`vi.mock("./AnyComponent", () => ({
  default: ({ profileId }) => \`This is AnyComponent profileId:\${profileId}\`,
}));`}
            />

            <p>It is important that you restore the original implementation to not interfere with any other tests that rely on the original implementation:</p>
            <SyntaxHighlighter
                codeString={`afterEach(() => {
  vi.restoreAllMocks();  // Restore all mocks to their original state after each test
});`}
            />

        </div>
    );
}

export default MockingComponents;
