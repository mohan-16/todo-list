
import {FaPlus} from "react-icons/fa";
import "./content.css";

const AddItems = ({setNewItems, handleSubmit , newItems }) => {
    

  
  return (
  <form className=" Additems" onSubmit={handleSubmit} >

    <input 
        type="text" 
        placeholder='Add items'
        autoFocus
        id='additem'
        required
        value={newItems}
       onChange={(e) => (setNewItems(e.target.value))} 
        />
    <button type='submit' aria-label='Add I
    tems' >
        <FaPlus/>
       
    </button>
  </form>
  )
}

export default AddItems