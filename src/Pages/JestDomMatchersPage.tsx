import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import H2Element from "../components/H2Element.tsx";

interface Props {}

function JestDomMatchersPager({}: Props) {
    return (
        <div>
            <H1Element text={"jest-dom Matchers with Vitest"} id="" />
            <p>The <span className={"code-p"}>jest-dom</span>-matchers are compatible with
                <span className={"code-p"}>Vitest</span>.</p>
            <p>First, install them:</p>
            <SyntaxHighlighter
                codeString={`npm install --save-dev @testing-library/jest-dom`}
            />
            <p>Import the libary in your <span className={"code-p"}>test/setup.ts</span>-file.</p>
            <SyntaxHighlighter
                codeString={`import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'; <-- Import it here

// Everything that was mounted via render() will be unmounted now
afterEach(() => {
    cleanup();
});`}
            />
            <p>Make sure you have added your <span className={"code-p"}>test/setup.ts</span>-file within your <span
                className={"code-p"}>vitest.config.ts</span>.</p>
            <SyntaxHighlighter
                codeString={`import { defineConfig } from 'vitest/config'; 
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', 
    setupFiles: './test/setup.ts', // <-- Include the setup file
  },
})`}
            />

            <p>Next, create a <span className={"code-p"}>type declaration file</span> in your <span className={"code-p"}>test</span> folder
                named <span className={"code-p"}>setup.d.ts</span> and add the import statement to it:</p>
            <p>(This makes our TypeScript aware of the the matachers from <span className={"code-p"}>@testing-library/jest-dom</span>.)</p>

            <SyntaxHighlighter
                codeString={`import '@testing-library/jest-dom';`}
            />

            <p>Finally, we update our <span className={"code-p"}>tsconfig.app.json</span>:</p>
            <SyntaxHighlighter
                codeString={`{
  "compilerOptions": {
    ...
  },
  "include": ["test/setup.d.ts", "src/**/*"]
}`}
            />

            <p>With everything set up, here is a basic test:</p>
            <SyntaxHighlighter
                codeString={`import { render } from '@testing-library/react';
import App from './App';
import {expect} from "vitest";

describe('App', () => {
    it('should render the App component', () => {
        const result = render(<App />)

        // this looks for the attribute data-testid with a value of "App"
        const app = result.getByTestId('App'); 

        expect(app).toBeInTheDocument();
    })
});`}
            />
                <H2Element text={"Common jest dom Matchers"} id="common-jest-dom-matchers"/>
                <SyntaxHighlighter
                    codeString={`expect(getByTestId('button')).toBeDisabled();`}
                />
                <SyntaxHighlighter
                    codeString={`expect(getByText('Visible Example')).toBeVisible();`}
                />
                <SyntaxHighlighter
                    codeString={`expect(getByTestId('button')).toBeInDocument();`}
                />
                <SyntaxHighlighter
                    codeString={`expect(getByTestId('button')).toHaveAttribute();`}
                />
                <SyntaxHighlighter
                    codeString={`expect(getByTestId('button')).toHaveClass();`}
                />
                <SyntaxHighlighter
                    codeString={`expect(getByTestId('button')).toHaveClass();`}
                />
                <SyntaxHighlighter
                    codeString={`expect(getByTestId('button')).toHaveValue();`}
                />
                <SyntaxHighlighter
                    codeString={`expect(getByTestId('button')).toBeChecked();`}
                />
        </div>
    );
}

export default JestDomMatchersPager;
