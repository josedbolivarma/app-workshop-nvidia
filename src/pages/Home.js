import React from 'react'
import FilterContainer from '../containers/FilterContainer'
import { makeStyles } from '@material-ui/core/styles'
import CardContainer from '../containers/CardContainer';

const Home = () => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <FilterContainer />
        <CardContainer />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        gridTemplateColumns: "2fr 4fr",
        gap: "20px",
        width: "90%",
        margin: "0 auto",
        paddingTop: theme.spacing(4)
    }
}));

export default Home