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
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Accordion 1</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
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
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Accordion 2</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
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
    }
 
}));

export default AccordionSimple;