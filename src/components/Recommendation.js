import React from 'react';
import { actRecommendationFetch } from '../actions/recommendation'
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        marginTop: '30px',
        overflow: 'auto',
        display:'flex',
        backgroundColor: theme.palette.background.paper,
        width:'600px'
    },
    recommendItem: {
        marginRight: '50px'
    },
    itemCaption: {
        width: '75px',
        marginBottom: '10px'
    },
    iconImage: {
        borderRadius: '20%'
    }
  });

class Recommendation extends React.Component {
    componentDidMount(){
        this.props.onInit()
      }
    render(){
        const { recommendation, classes } = this.props;
        return (
          <div className={classes.root}>
              {recommendation.data.map(item => (
                <div className={classes.recommendItem} key={item['im:image'][1].label}>
                  <img src = {item['im:image'][1].label} alt='icon' className={classes.iconImage}/>
                  <div>
                    <Typography variant="caption" className={classes.itemCaption}>{item['im:name'].label}</Typography>
                    <Typography variant="caption">{item.category.attributes.label}</Typography>
                  </div>
                </div>
              ))}
          </div>
        );
    }
  }

const mapStateToProps = state => {
return {
    recommendation: state.recommendation,
 }
}

const mapDispatchToProps = dispatch => ({
  onInit: () => {
      dispatch(actRecommendationFetch());
  },
})

const RecommendationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Recommendation));

export default RecommendationContainer;
