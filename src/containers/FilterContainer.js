import React, { useContext, useEffect, useState } from 'react'
import AccordionSimple from '../components/AccordionSimple'
import { InputSearch } from '../styled/styledcomponents'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import CardContext from '../context/card/CardContext';

const FilterContainer = () => {
    
    const classes = useStyles();
    const { getProfile, getCategory, category } = useContext(CardContext);
    
    console.log(category);
    const handleSearch = (e) => {
        console.log(e.target.value);
        getProfile(e.target.value);
    }
    useEffect(() => {
        getCategory()
     
      return () => {
        
      }
    }, [])
    

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
        onChange={handleSearch}
        />
        
                <AccordionSimple category={category}/>
       
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