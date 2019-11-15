import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

import Select from '@material-ui/core/Select';


 export class SignUpMentor extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
      e.preventDefault();
      this.props.prevStep();
    };
    
    
    render() {
      const { values, handleChange } = this.props;
      return (
        <MuiThemeProvider >
          <React.Fragment>
            <div style = {container}>
          
              <TextField
                
                placeholder="Enter your Mentor Subject"
                label="Mentor Subject"
                onChange={handleChange('mentorSubject')}
                defaultValue={values.mentorSubject}
                margin="normal"
                              fullWidth="true"
              />
              <br />
              <TextField
                placeholder="Enter your years of experience"
                label="Subject experience"
                onChange={handleChange('yearsExp')}
                defaultValue={values.yearsExp}
                margin="normal"
                              fullWidth="true"
              />
              <br />
              <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
         
          margin="normal"
        />
              <br />
              <Button color="primary" style = {buttonStyle} variant="contained" onClick={this.previous}>
                Previous</Button>
              <Button
                color="primary"
                variant="contained"
                style = {buttonStyle}
                onClick={this.continue}
              >Continue</Button>
              </div>
          
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
  }
  
  const buttonStyle = {

  
 
    padding: "0 32 px",
    margin: "0 64px",
    border: "5px orange"
  };
  const container = {
    margin: '150px',
    border: '5px orange'

};

 export default SignUpMentor
