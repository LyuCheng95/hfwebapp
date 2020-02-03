import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import 'react-calendar/dist/Calendar.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PersonCard from '../components/PersonCard';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import WcIcon from '@material-ui/icons/Wc';
import PersonManagementDialog from '../components/PersonManagementDialog';
import { person } from '../api';


const useStyles = makeStyles(theme => ({
  calendar: {
    borderRadius: '5px',
    padding: '10px;',
    boxShadow: '5px 10px #888888;',
    margin: 'auto',
    width: '80%',
    fontSize: '23px',
  },
  nameCard: {
    height: '180px',
  },
  functionButtonsGrid: {
    textAlign: 'center',
  },
  cardHeader: {
    padding: '3px 20px;',
    background: 'gray',
    color: 'white;',
  }
}));

export default function Attendance() {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [openManagementDialog, setOpenManagementDialog] = useState(false);
  const [personList, setPersonList] = useState([])
  useEffect(() => {
    person('read', {}).then(response => {
      let personInfo = response.data.message
        .replace(/"/, '')
        .replace(/"/, '')
        .split(';');
      personInfo.pop();
      personInfo = personInfo.map(info => info.split(','));
      setPersonList(personInfo);
    })
  }, []);
  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <div>
            <Calendar
              className={classes.calendar}
              value={date}
              onChange={date => setDate(date)}
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            direction='column'
            spacing={2}
          >
            <Grid item className={classes.functionButtonsGrid}>
              <ButtonGroup
                size="large"
                color="primary"
                variant="contained"
                className={classes.functionButtons}
              >
                <Button
                  onClick={() => setOpenManagementDialog(true)}
                >
                  管理
                </Button>
                <Button>出席</Button>
                <Button color='secondary'>提交</Button>
              </ButtonGroup>
            </Grid>
            <Grid item>
              <Card>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={<LocalLibraryIcon />}
                  title='老师'
                />
                <PersonCard />
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={<WcIcon />}
                  title='学生'
                />
                <PersonCard />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
      <PersonManagementDialog
        open={openManagementDialog}
        onClose={() => setOpenManagementDialog(false)}
        personList={personList}
      />
    </>
  )
}