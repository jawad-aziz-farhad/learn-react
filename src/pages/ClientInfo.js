import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 400
  }
});

export default function ClientInfo() {

  const classes = useStyles();

  const questions = [
    { question : 'Are they ok with remote?', answer : ''},
    { question : 'Are they firm on relocation?', answer : ''},
    { question : 'Type of work?', answer : ''},
    { question : 'F/T, P/T, hurly, pROJECT', answer : ''},
    { question : 'What is the hourly rate and salary?', answer : ''},
    { question : 'Technical interview required?', answer : ''},
    { question : 'Is the same person on the next call?', answer : ''},
    { question : 'What are next steps?', answer : ''} 
  
  ]
  
  const [feedback, setFeedback] = useState(questions);

  const updateFeedBack = (e, index) => {
    const _feedback = feedback.slice();
    _feedback.map((item, i) => {
        if(i === index)
          item.answer = e.target.value;
    });
    setFeedback(_feedback);

    console.log('Feedback' , feedback);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {questions.map((row , index)=> (
            <TableRow key={row.question}>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell align="right">
              <TextField
                  id="outlined-basic"
                  variant="outlined"
                  index={index}
                  onChange={e => updateFeedBack(e , index )}
              />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
