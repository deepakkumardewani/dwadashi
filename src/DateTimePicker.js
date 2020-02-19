import 'date-fns';
// import axios from 'axios';
import React, { Fragment, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from "moment";


export default class MaterialUIPickers extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dateTime: moment().format()
    }
  }

  render() {
    const { onTimeChange, onDateChange } = this.props;
    return (
      <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date"
            format="MM/dd/yyyy"
            value={this.state.dateTime}
            onChange={onDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Start Time"
            value={this.state.dateTime}
            onChange={(e, date) => onTimeChange(e, 'start', date)}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="End Time"
            value={this.state.dateTime}
            onChange={(e, date) => onTimeChange(e, 'end', date)}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Button variant="contained" color="primary">
          Submit button
        </Button>
        </Fragment>
    );
  }
}

// function test(selectedDate) {
//   console.log({selectedDate});

//   axios.get(`http://localhost:3050/testing`)
//       .then(res => {
//         console.log({res});
//       })
// }