import React, { useReducer, useState } from 'react'
import { useTodo } from './context/To_do_context'
import Reducers from './reducers/reducers';
function Input() {
    let [inputdata,setInput]=useState("")
    let todo = useTodo();
    let [state,dispatch]=useReducer(Reducers,todo)
    function addTask(){
        console.log(inputdata);
        if(!inputdata.trim()){
            alert('Enter a todo')
        }else{
            dispatch({type:"add",payload:inputdata.trim()})
            setInput('')
        }
    }
    return (
        <>
            <div className="fluid-container" >
                <input type="text" className='form-control d-flex mx-auto ' style={{
                    width: "40%",
                    display: 'flex',
                }} placeholder='Enter a task'value={inputdata} onChange={(e)=>setInput(e.target.value)}/>
                <br />
                <button className='btn btn-success fs-4 mx-auto d-flex' onClick={addTask}>Add To Do</button>
                <br />
                {
                    state.map((e) => {
                        return (
                            <>
                            <br />
                            <div className='card d-flex justify-content-center' style={{ marginLeft: '30%' ,width:"40%"}}>
                                
                                <div className="card-body">
                                    <h3 className='text-muted fs-4 text-center'>
                                        {e}
                                    </h3><br />
                                    <div className="d-flex justify-content-around">

                                        <button className='btn btn-warning'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </div>

                                </div>
                            </div>
                            </>
                                
                        )
                    })
                }
            </div>
        </>
    )

}

export default Input