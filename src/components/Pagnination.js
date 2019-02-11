import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import searchBarStyles from '../jss/searchBarStyles'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { connect } from "react-redux";


const Pagnination = props => {

    const { 
        handleNextButtonClick,
        handleBackButtonClick,
        handlePageClick,
        page,
        list,
       } = props;

  return (
    <div>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 1}
          aria-label="Previous Page"
        >
            <KeyboardArrowLeft /> 
        </IconButton>
        {
            [...Array(Math.ceil(list.length/10))].map((number,idx)=>(
                <IconButton key={idx.toString()} onClick={()=>handlePageClick(idx + 1)}>
                    {idx + 1}
                </IconButton>
            ))
        }
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page === 10}
          aria-label="Next Page"
        >
            <KeyboardArrowRight />
        </IconButton>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        list: state.list.search,
    }
}

    const PagninationContainer = connect(
      mapStateToProps
    )(withStyles(searchBarStyles)(Pagnination));

    export default PagninationContainer;

