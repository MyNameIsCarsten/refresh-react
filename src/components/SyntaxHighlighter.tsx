import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
    codeString: string;
}

const SyntaxHighlighterComponent = ({codeString}: Props) => {
    return (
        <div className="pb-6 pt-6">
            <SyntaxHighlighter
                language="typescript"
                style={a11yDark}
                showInlineLineNumbers={true}
                showLineNumbers={true}
                wrapLines={true}
                wrapLongLines={true}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default SyntaxHighlighterComponent