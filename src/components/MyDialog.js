import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function FormDialog(props) {

  return (
    <div>

      <Dialog open={props.isDialog} onClose={() => props.handleDialog(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Get in Touch</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => props.handleInputChange(e, 'name')}
            autoFocus
            margin="dense"
            value={props.user.name || ''}
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => props.handleInputChange(e, 'email')}
            autoFocus
            margin="dense"
            value={props.user.email || ''}

            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            onChange={(e) => props.handleInputChange(e, 'company')}
            margin="dense"
            value={props.user.company || ''}

            label="company"
            type="text"
            fullWidth
          />
          <br/>

          <InputLabel id="demo-simple-select-label">Interested In</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.user.interest || ''}
            onChange={(e) => props.handleInputChange(e, 'interest')}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <br/>

          <TextField
            onChange={(e) => props.handleInputChange(e, 'message')}
            margin="dense"
            label="Message"
            type="text"
            value={props.user.message || ''}
            fullWidth
          />
          {/*<TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />*/}
        </DialogContent>
        <DialogActions>
          {props.error}
          <Button onClick={() => props.handleDialog(false)} color="primary">
            Cancel
          </Button>
          { !props.user._id &&
            <Button onClick={props.addUser} color="primary">
              Submit
            </Button>
          }
          { props.user._id &&
          <Button onClick={props.editUser} color="primary">
            Edit
          </Button>
          }

        </DialogActions>
      </Dialog>
    </div>
  );
}
