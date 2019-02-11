import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import searchBarStyles from '../jss/searchBarStyles'
import { actRecommendationSearch,actAppListSearch } from '../actions/search'
import { connect } from "react-redux";

const SearchBar = props => {
  const { classes, onSearch, handlePageOfSearch } = props;

  return (
    <Paper className={classes.root} elevation={5}>
      <InputBase className={classes.input} placeholder="Search" onChange={e=>{
          onSearch(e.target.value)
          handlePageOfSearch(1)
        }}
      />
      <IconButton className={classes.iconButton} aria-label="SearchIcon">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

const mapDispatchToProps = dispatch => ({
  onSearch: (input) => {
      dispatch(actRecommendationSearch(input));
      dispatch(actAppListSearch(input));
  },
})

const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(withStyles(searchBarStyles)(SearchBar));

export default SearchBarContainer;