import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";

interface Props {}

function VitestTesting({}: Props) {
    return (
        <div>
            <H1Element text={"Testing with Vitest"} id=""/>
            <p>Here is a simple, initial test setup:</p>
            <SyntaxHighlighter
                codeString={`import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('should render the App component', () => {
        render(<App />)

        screen.debug(); // Prints out the full App component to the console
    })
});`}
            />
            <p>Now, we can run the test via <span className={"code-p"}>npm run test</span></p>
        </div>
    );
}

export default VitestTesting;
