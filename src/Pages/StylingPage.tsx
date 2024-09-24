import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import H2Element from "../components/H2Element.tsx";

interface Props {}

function GettingStartedPage({}: Props) {
    return (
        <div>
            <H1Element text={"Styling"} id=""/>

            <H2Element id={"styling-via-inline-styles"} text={"Styling via Inline Styles"}/>
            <SyntaxHighlighter codeString={`<h1 style={{color: \"red\"}}>Hello Style!</h1>`}/>

            <H2Element id={"styling-via-styled-components"} text={"Styling via Styled-Components"}/>
            <SyntaxHighlighter codeString={"npm install styled-components"}/>
            <p>For each element you want to style, create a <span className={"code-p"}>Styled-Component</span>.</p>
            <p>In this case, we are creating a <span className={"code-p"}>header</span> element.</p>
            <SyntaxHighlighter codeString={`import styled from "styled-components";

const HeaderWrapper = styled.header\`
    padding: 30px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
\`

function Header() {
    return (
        <>
            <HeaderWrapper>
                Hello World
            </HeaderWrapper>
        </>
    )
}

export default Header`}/>

            <H2Element id={"styling-via-tailwind"} text={"Styling via Tailwind"}/>
            <SyntaxHighlighter
                codeString={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
            />
            <a
                href={"https://tailwindcss.com/docs/guides/vite"}
                className="text-amber-600 font-bold italic"
            >
                (See also: Install Tailwind CSS with Vite)
            </a>
            <p>Then, apply styles via the predefined <span className={"code-p"}>className</span>-attributes.</p>
            <SyntaxHighlighter codeString={`<div className={\`flex p-3 overflow-hidden\`}></div>`}/>
        </div>
    );
}

export default GettingStartedPage;
