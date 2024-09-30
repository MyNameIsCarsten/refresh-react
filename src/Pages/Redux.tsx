import H1Element from "../components/H1Element.tsx";
import SyntaxHighlighter from "../components/SyntaxHighlighter.tsx";
import {Link} from "react-router-dom";
import H2Element from "../components/H2Element.tsx";

interface Props {}

function Redux({}: Props) {
    return (
        <div>
            <H1Element text={"Redux"} id="" />
            <p>Redux is a way of handling your global <span className={"code-p"}>state</span>.
            </p>
            <p>(This pages assumes that you are familiar with <span className={"code-p"}><Link to={"/useReducer"}>useReducer</Link></span>.)</p>
            <H2Element text={"Store"} id="store" />
            <p>The current Redux application state lives in an object called the <span className={"code-p"}>store</span>.</p>
            <p>The <span className={"code-p"}>store</span> is created via a method called the <span className={"code-p"}>configureStore</span>  that receives a reducer:</p>
            <SyntaxHighlighter
                codeString={`import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ 
    reducer: counterReducer 
    // Or with mutliple reducer each responsible for one slice:
    // reducer: {
    // jobs: jobsReducer, // using a slice created via createSlice()
});

// Infer the type of \`store\`
// Export some reusable types based on the Store
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the \`AppDispatch\` type from the store itself
export type AppDispatch = AppStore['dispatch']
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>`}
            />
            <H2Element text={"slice"} id="slice" />
            <p>A <span className={"code-p"}>slice</span> is a collection of Redux reducer logic and actions for a single feature in your
                app.</p>
            <SyntaxHighlighter
                codeString={`import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define the TS type for the counter slice's state
export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

// Define the initial value for the slice state
const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The \`reducers\` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// Export the generated action creators for use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the slice reducer for use in the store configuration
export default counterSlice.reducer`}
            />
            <H2Element text={"Providing The Store"} id="providing-the-store" />
            <p>To make the <span className={"code-p"}>store</span> accessible for your components, just like with <span
                className={"code-p"}><Link to={"/useContext"}>useContext</Link></span>, we need to provide it to our app:</p>
            <SyntaxHighlighter
                codeString={`import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './app/store'

import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)`}
            />

            <H2Element text={"useDispatch"} id="usedispatch"/>
            <p>The <span className={"code-p"}>useDispatch</span>-hook provides us with an <span className={"code-p"}>dispatch</span>-method.</p>
            <p>Just like with <span className={"code-p"}><Link to={"/useReducer"}>useReducer</Link></span> you will use this method to send
                an <span className={"code-p"}>action</span>-object to the <span className={"code-p"}>reducer</span> which will update
                its <span className={"code-p"}>state</span> accordingly.</p>
            <SyntaxHighlighter
                codeString={`// action creator
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment()) // dispatch action object returned from action creator

console.log(store.getState())
// {value: 2}`}
            />
            <H2Element text={"Selectors"} id="selectors" />
            <p>In order to access the value of the <span className={"code-p"}>state</span> (or of a <span
                className={"code-p"}>state slice</span>) you can use the <span className={"code-p"}>useSelector</span>-Hook.
            </p>
            <SyntaxHighlighter
                codeString={`import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
.... 
const selectorFunction = (state: RootState) => state.jobs.app //jobs is the slice //app is a value from the state object
const app = useSelector(selectorFunction)`}
            />
        </div>
    );
}

export default Redux;
