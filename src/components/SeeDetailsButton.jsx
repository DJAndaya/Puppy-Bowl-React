import React, { useState } from "react"
// material UI imports
import Button from "@mui/material/Button"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SeeDetailsButton = ({puppy}) => {
  
  const [open, setOpen] = useState(false)
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen} >
        See Details
      </Button>
      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      > 
        <DialogTitle id="alert-dialog-title">
          More information on {puppy.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            id: {puppy.id}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            breed: {puppy.breed}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            status: {puppy.status}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
  </>
  )
}

export default SeeDetailsButton