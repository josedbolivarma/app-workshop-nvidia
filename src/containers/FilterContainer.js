import React from 'react'
import AccordionSimple from '../components/AccordionSimple'
import { InputSearch } from '../styled/styledcomponents'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const FilterContainer = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.boxLabel}>
        <Typography>
        Search   
        </Typography>
           <span className={classes.navLink}>Clear</span>
        </div>
        <InputSearch
        type='search'
        placeholder='Search'
        />
        <AccordionSimple />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    },
    boxLabel: {
        display: "flex",
        justifyContent: "space-between"
    },
    navLink: {
        color: 'green',
        textDecoration: 'underline'
    }
}))

export default FilterContainer