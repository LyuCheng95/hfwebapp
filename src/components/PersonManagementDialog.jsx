import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import WcIcon from '@material-ui/icons/Wc';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  listItem: {
    width: '200px',
  },
  formControl: {
    marginRight: '20px',
  }
});

export default function PersonManagementDialog(props) {
  const classes = useStyles();
  const { onClose, open, personList } = props;
  const staffList = personList.filter(person => person[1] === 'staff');
  const studentList = personList.filter(person => person[1] === 'student');
  const inputLabel = React.useRef(null);
  const [newPerson, setNewPerson] = useState('');
  const [newRole, setNewRole] = useState('');
  const handleClose = () => {
    onClose();
  };
  const handleAddPerson = () => {
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">人员管理</DialogTitle>
      <Grid container direction='column'>
        <Grid item>
          <Grid container>
            <Grid item>
              <List>
                {staffList.map(personInfo => (
                  <ListItem className={classes.listItem} key={personInfo}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <LocalLibraryIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={personInfo[0]} />
                    <ListItemSecondaryAction>
                      <Fab>
                        <DeleteIcon />
                      </Fab>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item>
              <List>
                {studentList.map(personInfo => (
                  <ListItem className={classes.listItem} key={personInfo}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <WcIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={personInfo[0]} />
                    <ListItemSecondaryAction>
                      <Fab>
                        <DeleteIcon />
                      </Fab>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item>
          <List>
            <ListItem>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">身份</InputLabel>
                <Select
                  native
                  value={newRole}
                  onChange={e => setNewRole(e.target.value)}
                  inputProps={{
                    name: 'newRole',
                    id: 'filled-age-native-simple',
                  }}
                >
                  <option value="" />
                  <option value={'老师'}>老师</option>
                  <option value={'学生'}>学生</option>
                </Select>
              </FormControl>
              <TextField id="filled-basic" label="姓名" variant="filled" />
              <ListItemSecondaryAction>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Dialog>
  );
}