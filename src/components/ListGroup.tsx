import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
//import { MouseEvent } from "react";
function ListGroup() {
  let items = ["orange", "apple", "mango", "banana", "grapes"];
 // let selectedIndex=-1;
//event handler
 // const handleClick = (event: MouseEvent) => console.log(event);
const [selectedIndex, setSelectedIndex]=useState(-1);


  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={()=>{setSelectedIndex(index);}}
                      >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
