import React, { useState } from "react"
// material UI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// router imports
import { NavLink } from "react-router-dom";
  
const NewPuppyForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    error: null
}) 

  const handleSubmitForm = async () => {
    console.log(formData.name)
    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-PT-SF/players/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          breed: formData.breed,
          status: "bench",
          imageUrl: formData.imageUrl,
        })
      })
      const result = await response.json()
      console.log(result)
      console.log("submitted")
    } catch (error) {
      setFormData({
        ...formData,
        ["error"]: error.message
      })
      console.log("didn't work")
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // console.log(formData)
  }
    
  return (
    <>
      <h2>New Puppy Form</h2>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
            />
          </label>
          {/* <br/> */}
          {/* <NavLink to={"/"} className={({ isActive, isPending}) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : "text-white mr-4"
            }> */}
            <button onClick={handleSubmitForm}>Submit</button>
          {/* </NavLink> */}
        </div>
    </>    
  );

}

export default NewPuppyForm