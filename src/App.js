import React from 'react';
import SearchBar from './components/SearchBar'
import Recommendation from './components/Recommendation'
import AppList from './components/AppList'
import Pagnination from './components/Pagnination'
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  handleNextButtonClick = () => {
    this.setState({
      page: this.state.page + 1
    })
  }

  handleBackButtonClick = () => {
    this.setState({
      page: this.state.page - 1
    })
  }

  handlePageClick = page => {
    this.setState({
      page
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} sm={12} style={{ display: 'flex' }} justify='center'>
          <SearchBar classes={classes} />
        </Grid>
        <Grid item xs={12} sm={12} style={{ display: 'flex' }} justify='center'>
          <Recommendation classes={classes} />
        </Grid>
        <Grid item xs={12} sm={12} style={{ display: 'flex' }} justify='center'>
          <AppList classes={classes} page={this.state.page}/>
        </Grid>
        <Grid item xs={12} sm={12} style={{ display: 'flex' }} justify='center'>
          <Pagnination
            classes={classes}
            handleNextButtonClick={this.handleNextButtonClick}
            handleBackButtonClick={this.handleBackButtonClick}
            handlePageClick={this.handlePageClick}
            page={this.state.page}
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;