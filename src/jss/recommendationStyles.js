const recommendationStyles = theme => ({
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

  export default recommendationStyles