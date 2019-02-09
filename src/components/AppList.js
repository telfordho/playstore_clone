import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { actAppListFetch } from '../actions/list'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import appListStyles from '../jss/appListStyles'
import { connect } from "react-redux";

class AppList extends React.Component {

  componentDidMount = () => {
    this.props.onInit()
  }

  handleDataPerPageRender = () => {
    const { list, page } = this.props;
    if (page === 1)
      return list.search.slice(0, 10)
    else
      return list.search.slice((page * 10) - 10, page * 10)
  }

  handleAppNumberRender = (idx) => {
    const { page } = this.props;
    if (page === 1)
      return idx + 1
    else
      return page * 10 - 9 + idx
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <List dense={false}>
          {this.handleDataPerPageRender().map((item, idx) => (
            <ListItem key={this.handleAppNumberRender(idx).toString()}>
              <Typography component="h2" variant="display2" className={classes.appNo}>{this.handleAppNumberRender(idx)}</Typography>
              <ListItemIcon>
                <img src={item['im:image'][1].label} alt='icon' className={(idx + 1) % 2 ? classes.iconImageCorner : classes.iconImageCircle} />
              </ListItemIcon>
              <Grid className={classes.infoWidth}>
                <Typography variant="subtitle1">{item['im:name'].label}</Typography>
                <Typography variant="caption">{item.category.attributes.label}</Typography>
                <StarRatings starRatedColor='orange' numberOfStars={5} rating={item.rating} starDimension="20px" starSpacing="5px"/>
              </Grid>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
  }
}

const mapDispatchToProps = dispatch => ({
  onInit: () => {
    dispatch(actAppListFetch());
  },
})

const AppListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(appListStyles)(AppList));

export default AppListContainer;