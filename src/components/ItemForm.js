import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({onItemFormSubmit}) {
const [name, setName] = useState('')
const [category, setCategory] = useState("Produce")

function handleCategoryChange(e){
  setCategory(e.target.value)
}

function handlecNameChange(e){
  setName(e.target.value)
}
  
function handleSubmit(e){
  e.preventDefault()
  const newItem = {
    id: uuid(),
    name: name,
    category: category
  }
  return onItemFormSubmit(newItem)
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handlecNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}> 
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
