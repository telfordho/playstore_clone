import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import searchBarStyles from '../jss/searchBarStyles'

const SearchBar = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={5}>
      <InputBase className={classes.input} placeholder="Search"/>
      <IconButton className={classes.iconButton} aria-label="SearchIcon">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default withStyles(searchBarStyles)(SearchBar);