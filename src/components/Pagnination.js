import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import searchBarStyles from '../jss/searchBarStyles'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Pagnination = props => {

    const { 
        handleNextButtonClick,
        handleBackButtonClick,
        handlePageClick,
        page
       } = props;
       console.log(page)
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
            [...Array(10)].map((number,idx)=>(
                <IconButton onClick={()=>handlePageClick(idx + 1)}>
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

export default withStyles(searchBarStyles)(Pagnination);