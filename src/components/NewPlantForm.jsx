import React, { useState } from "react";

function NewPlantForm({handleCreate}) {
  const [formData,setFormData] = useState({
    name:"",
    image:"",
    price:0
  })
  function handleChange(e){
    const {name,value} = e.target
    setFormData(prevFormData => ({
      ...prevFormData,[name]:value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    handleCreate(formData)
    setFormData({
      name:"",
      image:"",
      price:0
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
