import {  createContext, useContext } from "react";
// create a context
const newtodo = createContext()

export default function To_Do_Context(props) {
    const todo =['Brush your teeth','Practice coding questions']
    return (
        <>
            <newtodo.Provider value={ todo }>
                {props.children}
            </newtodo.Provider>
        </>
    )
}
// create a custom hook to use the context globally
export const useTodo=()=>{
    const tododata=useContext(newtodo)
    return tododata
}