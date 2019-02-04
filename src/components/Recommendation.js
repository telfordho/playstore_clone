import React from 'react';
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
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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

function Recommendation(props) {
    const { classes } = props;
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

export default withStyles(styles)(Recommendation);