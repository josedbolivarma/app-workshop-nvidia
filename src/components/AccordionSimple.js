import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardContext from '../context/card/CardContext';

//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionSimple = ({category}) => {
  const classes = useStyles();
  const { getProfile } = useContext(CardContext);

  console.log(category);
  const onFilterCategory = (e) => {
    e.stopPropagation();
    console.log(e.target.name);
    getProfile(e.target.value,e.target.name);
  }

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
            {
              category.map(el => (
          <FormControlLabel className={classes.formLabel} key={el.id}
            aria-label="Acknowledge"
            onChange={onFilterCategory}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label={el.industry_segment}
            name='industry_segment'
            value={el.industry_segment}
          />
              ))
            }
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Audience Level</Typography>
         
        </AccordionSummary>
        <AccordionDetails
        className={classes.transparent}>
          <Typography>
          {
              category.map(el => (
          <FormControlLabel className={classes.formLabel} key={el.id}
            aria-label="Acknowledge"
            onFocus={(event) => event.stopPropagation()}
            onChange={onFilterCategory}
            control={<Checkbox />}
            name='audience_level'
            label={el.audience_level}
            value={el.audience_level}
          />
              ))
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Audience Type</Typography>
         
        </AccordionSummary>
        <AccordionDetails
        className={classes.transparent}>
          <Typography>
          {
              category.map(el => (
          <FormControlLabel className={classes.formLabel} key={el.id}
            aria-label="Acknowledge"
            onFocus={(event) => event.stopPropagation()}
            onChange={onFilterCategory}
            name='audience_type'
            control={<Checkbox />}
            label={el.audience_type}
            value={el.audience_type}
          />
              ))
            }
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
          {
              category.map(el => (
          <FormControlLabel className={classes.formLabel} key={el.id}
            aria-label="Acknowledge"
            onFocus={(event) => event.stopPropagation()}
            onChange={onFilterCategory}
            name='session_type'
            control={<Checkbox />}
            label={el.session_type}
            value={el.session_type}
          />
              ))
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className={classes.transparent}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}>Language</Typography>
         
        </AccordionSummary>
        <AccordionDetails
        className={classes.transparent}>
          <Typography>
          {
              category.map(el => (
          <FormControlLabel className={classes.formLabel} key={el.id}
            aria-label="Acknowledge"
            onFocus={(event) => event.stopPropagation()}
            onChange={onFilterCategory}
            name='lenguage'
            control={<Checkbox />}
            label={el.lenguage}
            value={el.lenguage}
          />
              ))
            }
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
    },
    formLabel: {
      width: '100%'
    }
 
}));

export default AccordionSimple;