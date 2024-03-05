import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Test5 from './Test5'
function Test4() {
    const [circle, setCircle] = useState([]);
    const createCircle = () => {
        let obj1 = {
            id: Math.trunc(Math.random() * 1123),
            isSelected: false,
        };
        setCircle([...circle, obj1]);
    }
    const selectCircle = (id) => {
        circle[id].isSelected = !circle[id].isSelected;
        setCircle([...circle])
    }
    const deleteCircle = () => {
        setCircle(() => {
            return circle.filter((ele) => 
                !ele.isSelected);
        });
    };

    return (
        <>
            <div>
                <button className='btn btn-info'onClick={createCircle}>Create Circle</button>
                <button className='btn btn-danger' onClick={deleteCircle}>Delete Circle</button>
            </div>
            <div>
        <h3>No of circles:{circle.length}</h3>
        <h3>
          No of selected circles:{circle.filter((e) => e.isSelected).length}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Test5 circle={circle} selectCircle={selectCircle} />
      </div>
      <Link to='/'>Go Back</Link>
        </>
    )
}

export default Test4