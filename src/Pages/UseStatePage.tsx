import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import H2Element from "../components/H2Element.tsx";
import {Link} from "react-router-dom";

interface Props {}

function UseStatePage({}: Props) {
    return (
        <div>
            <H1Element text={"useState-Hook"} id=""/>
            <p><span className={"code-p"}>useState</span> is like your Components memory.</p>
            <p>The value that is passed into the hook is the default starting value.</p>
            <p>The hook returns the <span className={"code-p"}>current state</span>, which is the first value, and a <span
                className={"code-p"}>set function</span>, which is the second value.</p>
            <p>You can store ("set") a value via the <span
                className={"code-p"}>set function</span> and you can read it via the <span className={"code-p"}>current state</span>.</p>
            <p>The syntax is as follows </p>
            <SyntaxHighlighter
                codeString={`import { useState } from 'react';
...
const [ currentState, setCurrentState ] = useState<type>('')`}
            />
            <p>Or with concrete examples:</p>
            <SyntaxHighlighter
                codeString={`const [ name, setName ] = useState<string>('')`}
            />
            <SyntaxHighlighter
                codeString={`const [ count, setCount ] = useState<number>(0);`}
            />
            <H2Element text={"Using localStorage"} id={"localStorage"}></H2Element>
            <p>Combine <span className={"code-p"}>useState</span> with <span className={"code-p"}><Link to={"/useeffect"}>useEffect</Link> </span> to
                store your <span
                    className={"code-p"}>state</span> within the browsers <span className={"code-p"}>localStorage</span>.</p>
            <SyntaxHighlighter
                codeString={`const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []); // read the value from localStorage when the Component mounts

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]); // store the new value, whenever items changes`}
            />
        </div>
    );
}

export default UseStatePage;
