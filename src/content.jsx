import React from "react";
import "./content.css";

import { MdDelete } from "react-icons/md";


const ContentPart = ({  items , handleChange ,  handleDelete }) => {
 
  return (
    <>
      <main>
        {(items.length) ? (
        <ul className="Content">
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                className="checkeds"
                type="checkbox"
                onChange={() => handleChange(item.id)}
                checked={item.checked}
              />

              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {" "}
                {item.item}
              </label>

              <MdDelete
                role=" button"
                onClick={() => handleDelete(item.id)}
                tabIndex="1"
              />
            </li>
          ))}
        </ul>
      ) :( <p style={{margin:"130px 0px 90px 0px " ,fontSize:"40px" , fontWeight:"900" , color:"rgb(40, 2, 116)" , letterSpacing:"4px"}}> 404 Your list is empty</p>)
       }
      </main>
    </>
  );
};

export default ContentPart;
