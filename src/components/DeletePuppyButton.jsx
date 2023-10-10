import React, { useState } from "react"
// material UI imports
import Button from "@mui/material/Button"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeletePuppyButton = ({puppy}) => {
  
  const [open, setOpen] = useState(false)
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    deletePuppy(puppy)
    setOpen(false);
  };
  // console.log(puppy.id)
  const deletePuppy = async (puppy) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-PT-SF/players/${puppy.id}`,
        {
          method: 'DELETE',
        }
      );
      const result = await response.json();
      console.log(result);
      console.log("worked")

    } catch (err) {
      console.error(err);
      console.log("did not work")
    }
  
  }
  return (
    <>
      <Button variant="outlined" color="error" onClick={handleClickOpen} >
        Delete
      </Button>
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      > 
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete {puppy.name}?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">Bye {puppy.name}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
  
  export default DeletePuppyButton