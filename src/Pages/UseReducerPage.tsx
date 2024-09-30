import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import H2Element from "../components/H2Element.tsx";
import {Link} from "react-router-dom";

interface Props {}

function UseReducerPage({}: Props) {
    return (
        <div>
            <H1Element text={"useReducer-Hook"} id=""/>
            <p>The <span className={"code-p"}>useReducer</span>-Hook can be used whenever your <span
                className={"code-p"}>state</span> consists of complex objects.</p>
            <p>If it is just a simple value, you can use <span className={"code-p"}><Link to={"/usestate"}>useState</Link></span>.</p>
            <p>First, create a new file with the suffix<span className={"code-p"}>slice</span> e.g.
                <span className={"code-p"}>listSlice.tsx</span>.
            </p>
            <p>Within this file we will have two things: an <span className={"code-p"}>initialState</span> and a <span
                className={"code-p"}>reducer</span>-function that will perform an update of the <span
                className={"code-p"}>initialState</span> depending on the input it gets.</p>
            <H2Element text={"initialState"} id="initialState"/>
            <p>The <span className={"code-p"}>initialState</span> defines the default values of our the <span
                className={"code-p"}>state</span>.</p>
            <SyntaxHighlighter
                codeString={`export const initialState = {
    loading: true,
    data: null,
    error: false,
    message: null                
}`}
            />
            <H2Element text={"Reducer"} id="reducer"/>
            <p>The <span className={"code-p"}>Reducer</span> is a function that takes in two parameters, <span
                className={"code-p"}>state</span> and an <span
                className={"code-p"}>action</span>-object, and updates the state accordingly.</p>
            <p>Finally, it returns the updated <span
                className={"code-p"}>state</span>.</p>
            <p>The <span className={"code-p"}>state</span> is the current state.</p>
            <p>The <span className={"code-p"}>action</span>-object has a <span className={"code-p"}>type</span> and <span
                className={"code-p"}>payload</span> property.
            </p>
            <SyntaxHighlighter
                codeString={`export const reducer = (state, action) = {
    switch(action.type) { // based on the action.type we perform different updates to the state                
        case "LOADING:
         return {
                ...state
                loading: true,
            };
        case "SUCCESS":
            return {
                ...state
                loading: false,
                data: action.payload, // here we read the value from the action object 
            };
        case "ERROR":
            return {
                ...state
                loading: false,
                error: true,
                message: action.message   
            }
        case default:
            return state;
}`}
            />
            <H2Element text={"useReducer"} id="usereducer"/>
            <p>Now, import the <span className={"code-p"}>reducer</span> and the <span className={"code-p"}>initialState</span> from your <span className={"code-p"}>*slice</span>-file.</p>
            <p>In your component you can then get the current <span className={"code-p"}>state</span> and a <span className={"code-p"}>dispatch</span>-function,
                that can be called
                with an <span className={"code-p"}>action</span>-object to update your <span className={"code-p"}>state</span> from the <span className={"code-p"}>useReducer</span>-hook.</p>
            <p>Both are returned form the <span className={"code-p"}>useReducer</span>-hook.</p>
            <SyntaxHighlighter
                codeString={`import { initialState, reducer } from './listSlice';
...                
const [ state, dispatch ] = useReducer( reducer, initialState)`}
            />

            <H2Element text={"API Component Example"} id="api-component-example"/>
            <SyntaxHighlighter
                codeString={`function APIComponent () {
     const [ state, dispatch ] = useReducer( reducer, initialState)  
     
     useEffect(() => {
        // Update the state
        dispatch({ type: "LOADING "})
        fetch('react.com').then((response) => {
            // Update the state via the dispatch function with an action-object as input
            dispatch({ type: "SUCCESS", payload: response.data });)
        }).catch(error => {
            dispatch({ type: "Error", message: error.message });
        }) 
     }, []); // Perform the side effect on mount           
     
     // This is very simplified, but it should show how you can now access values from your state
     return (
        {state.loading 
            ?   <p>Loading...</p>
            :   <OtherComponent data={state.data} />
        }
        {state.error && <p>{state.message}</p>}
     )  
}`}
            />
        </div>
    );
}

export default UseReducerPage;
