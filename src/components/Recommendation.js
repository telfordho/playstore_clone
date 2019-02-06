import React from 'react';
import { actRecommendationFetch } from '../actions/recommendation'
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        marginTop: '30px',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        display:'flex',
        backgroundColor: theme.palette.background.paper,
        width:'100%'
    },
  });

const tileData = [
    {
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },    {
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },    {
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },{
        img: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/97/a5/fa/97a5fa37-678f-c5c2-7d73-7dfac54af5b2/pr_source.jpg/53x53bb-85.png',
        title: 'Image',
        author: 'author',
    },
];

class Recommendation extends React.Component {
    componentDidMount(){
        this.props.onInit()
      }
    render(){
        const { classes } = this.props;
        return (
          <div className={classes.root}>
              {tileData.map(tile => (
                <div key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <p>this is some text for testing use</p>
                </div>
              ))}
          </div>
        );
    }
  }

const mapDispatchToProps = dispatch => ({
  onInit: () => {
      dispatch(actRecommendationFetch());
  },
})

const RecommendationContainer = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Recommendation));

export default RecommendationContainer;
