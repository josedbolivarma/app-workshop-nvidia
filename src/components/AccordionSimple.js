import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionSimple = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Industry Segment</Typography>
         
        </AccordionSummary>
        <AccordionDetails className={classes.transparent}>
          <Typography>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should stop the click event propagation"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Primary Topic</Typography>
         
        </AccordionSummary>
        <AccordionDetails
        className={classes.transparent}>
          <Typography>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should stop the click event propagation"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Other Collections</Typography>
         
        </AccordionSummary>
        <AccordionDetails
        className={classes.transparent}>
          <Typography>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should stop the click event propagation"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Session Type</Typography>
         
        </AccordionSummary>
        <AccordionDetails
        className={classes.transparent}>
          <Typography>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should stop the click event propagation"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Other colletions</Typography>
         
        </AccordionSummary>
        <AccordionDetails
        className={classes.transparent}>
          <Typography>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should stop the click event propagation"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    },
    signupLink: {
      color: 'blue',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    transparent: {
      backgroundColor: '#ddd',
      border: 'none',
      boxShadow: 'none'
    }
 
}));

export default AccordionSimple;