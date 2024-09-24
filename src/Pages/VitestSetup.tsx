import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";

interface Props {}

function VitestSetup({}: Props) {
    return (
        <div>
            <H1Element text={"Setting up Vitest"} id=""/>
            <p>Especially, in projects build with <span className={"code-p"}>Vite</span> you can use the testing library<span
                className={"code-p"}>Vitest</span> instead of <span className={"code-p"}>Jest</span>.
            </p>
            <p>
                First install <span className={"code-p"}>Vitest</span> as a dev dependency:
            </p>
            <SyntaxHighlighter
                codeString={`npm install --save-dev vitest`}
            />
            <p>Optionally, you can define the registry, that should be used via <span className={"code-p"}>--registry https://registry.npmjs.org</span>
            </p>

            <p>Next, inclue a <span className={"code-p"}>test</span> script in your <span
                className={"code-p"}>package.json</span>.
            </p>
            <SyntaxHighlighter
                codeString={` "scripts": {
    ...
    "test": "vitest",
  },`}
            />

            <p>
                Now install the <span className={"code-p"}>jsdom</span> library that provides us with a subset of the web browser API:
            </p>
            <SyntaxHighlighter
                codeString={`npm install --save-dev jsdom`}
            />

            <p>Next, define <span className={"code-p"}>jsdom</span> as your <span
                className={"code-p"}>test-environment</span> in your <span className={"code-p"}>vite.config.ts</span>.
            </p>
            <p>You might also have to update the import line as shown below.</p>
            <SyntaxHighlighter
                codeString={`import { defineConfig } from 'vitest/config'; // <-- Update this line
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: { // <-- Add this block
    environment: 'jsdom', // <-- Define the testing environment
  },
})
`}
            />

            <p>Now we can already write simple tests with <span className={"code-p"}>Vitest</span>.</p>
            <p>It has provided us with the classic tools like <span className={"code-p"}>test suites, test cases, assertions</span>and
                a <span className={"code-p"}>test runner</span>.</p>
            <p>However, in order to test user interactions with our components we will need to install the <span
                className={"code-p"}>React Testing Library</span> as well.</p>
            <SyntaxHighlighter
                codeString={`npm install --save-dev @testing-library/jest-dom`}
            />
            <SyntaxHighlighter
                codeString={`npm install --save-dev @testing-library/react`}
            />
            <SyntaxHighlighter
                codeString={`npm install --save-dev @testing-library/user-event`}
            />

            <p>We are almost done. We have to create a <span className={"code-p"}>test/setup.ts</span> file in our <span
                className={"code-p"}>root</span> folder.
            </p>
            <SyntaxHighlighter
                codeString={`import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

// Everything that was mounted via render() will be unmounted now
afterEach(() => {
    cleanup();
});`}
            />
            <p>To get <span className={"code-p"}>vitest</span> working with <span className={"code-p"}>TypeScript</span> we have to specify
                the <span className={"code-p"}>types</span> option in <span className={"code-p"}>tsconfig.app.json</span>:</p>
            <SyntaxHighlighter
                codeString={`{
  "compilerOptions": {
    ...
    "types": ["vitest/globals"],
    ...
  },
  "include": ["src"]
}
`}
            />
            <p>Finally, update the <span className={"code-p"}>vite.config.ts</span> to include the <span
                className={"code-p"}>setup.ts</span>-file.</p>
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
            <p>Optionally, we can set the <span className={"code-p"}>globals</span> option to <span
                className={"code-p"}>true</span>, if we don't want to import functions from <span className={"code-p"}>vitest</span> within every test file.</p>
            <SyntaxHighlighter
                codeString={`import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts', 
    globals: true, // <-- Now we no longer need to import expect, describe, it etc.
  },
})`}
            />
            <p>Based on instructions from: <a
                href="https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a"
                className="text-amber-600 font-bold italic"
            >Victor Bruce</a> published on Medium.</p>
        </div>
    );
}

export default VitestSetup;
