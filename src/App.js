import { useState } from "react";
import "./index.css";
import "./App.css";
import "./content.css";
import ContentPart from "./content";
import Footer from "./footer";
import HeaderFile from "./header";
import AddItems from "./AddItems";
import SearchItems from "./SearchItems";

function App() {
  const [items, setItem] = useState([
    { id: 1, checked: true, item: "delete this list" },

    { id: 2, checked: false, item: "delete this list" },

   
    { id: 3, checked: false, item: "Add your's" },
  ]);
  const [newItems, setNewItems] = useState("");
  const [search , setSearch] = useState("")
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem =( { id, checked: false, item });
    const listitems = [...items, addNewItem];
    setItem(listitems);
    localStorage.setItem("todo_List", JSON.stringify(listitems));
  };

  const handleChange = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listitems);
    localStorage.setItem("todo_List", JSON.stringify(listitems));
  };

  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setItem(listitems);

    localStorage.setItem("todo_List", JSON.stringify(listitems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    console.log(newItems);
    addItem(newItems);
    setNewItems("");
  };

  return (
    <>
      <div className="colo" style={{ height:"100vh" , overflow:"auto"}}>
        <HeaderFile />
        <AddItems
          handleSubmit={handleSubmit}
          newItems={newItems}
          setNewItems={setNewItems}
        />
        <SearchItems 
        search= {search}
        setSearch = {setSearch}/>
        <ContentPart
          items={items.filter(item => ((item.item).toLocaleLowerCase())
          .includes(search .toLocaleLowerCase()))}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />

        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
