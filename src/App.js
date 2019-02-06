import React from 'react';
import SearchBar from './components/SearchBar'
import Recommendation from './components/Recommendation'
import AppList from './components/AppList'
import Grid from '@material-ui/core/Grid';

const App = (props) => {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={12} sm={12} style={{display:'flex'}} justify='center'>
        <SearchBar classes={classes}/>
      </Grid>
      <Grid item xs={12} sm={12} style={{display:'flex'}} justify='center'>
        <Recommendation classes={classes}/>
      </Grid>
      <Grid item xs={12} sm={12} style={{display:'flex'}} justify='center'>
        <AppList classes={classes}/>
      </Grid>
    </Grid>
  );
}

export default App;