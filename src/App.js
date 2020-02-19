import React, {Component} from 'react';
import MaterialUIPickers from './DateTimePicker'
import './App.css';
import moment from "moment";

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      start: moment().format('HH:mm A'),
      end: moment().format('HH:mm A'),
      date: moment().format('DD-MM-YYYY')
    }
  }

  selectTime = (e, type, time) => {
    this.setState({ [type] : time})
  }
  selectDate = (e, date) => {
    this.setState({ date })
  }

  render() {
    return (
      <MaterialUIPickers
        onTimeChange={this.selectTime}
        onDateChange={this.selectDate}
      />
    )
  }
}
