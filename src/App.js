import React, {Suspense} from 'react';
import SearchBar from './components/SearchBar'
import Pagnination from './components/Pagnination'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
const LazyRecommendation = React.lazy(()=>import('./components/Recommendation'))
const LazyAppList = React.lazy(()=>import('./components/AppList'))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 1,
    };
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
      <div>
        <Grid style={{ display: 'flex' }} container justify='center'>
          <SearchBar classes={classes} />
        </Grid>
        <Grid style={{ display: 'flex' }} container justify='center'>
          <Suspense fallback={<div><CircularProgress variant="indeterminate" disableShrink/></div>}>
            <LazyRecommendation classes={classes} />
          </Suspense>
        </Grid>
        <Grid style={{ display: 'flex' }} container justify='center'>
          <Suspense fallback={<div><CircularProgress variant="indeterminate"disableShrink/></div>}>
            <LazyAppList classes={classes} page={this.state.page}/>
          </Suspense>
        </Grid>
        <Grid style={{ display: 'flex' }} container justify='center'>
          <Pagnination
            classes={classes}
            handleNextButtonClick={this.handleNextButtonClick}
            handleBackButtonClick={this.handleBackButtonClick}
            handlePageClick={this.handlePageClick}
            page={this.state.page}
          />
        </Grid>
      </div>
    );
  }
}

export default App;