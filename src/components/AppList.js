import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { actAppListFetch } from '../actions/list'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import {connect} from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

// function generate(element) {
//   return [0, 1, 2,3,4,5,6,7,8,9,10].map(value =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

class AppList extends React.Component {

  componentDidMount(){
    this.props.onInit()
  }

  render() {
    const { classes } = this.props;

    return (
            <div>
              <List dense={false}>
                {/* {generate( */}
                  <ListItem>
                    <p>1</p>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <div>
                      <p>kajdsfnjkasdnvjknadkjvnsjdnvksjdfngksdf</p>
                      <p>kajdsfnjkasdnvjknadkjvnsjdnvksjdfngksdf</p>
                      <p>kajdsfnjkasdnvjknadkjvnsjdnvksjdfngksdf</p>
                    </div>
                    {/* <ListItemText
                      primary="Single-line item"
                      secondary='Secondary Text'
                    /> */}
                  </ListItem>,
                {/* )} */}
                <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <p>kajdsfnjkasdnvjknadkjvnsjdnvksjdfnsdfsdfsdfsdfsdfsdfsdfgksdf</p>
                    {/* <ListItemText
                      primary="Single-line item"
                      secondary='Secondary Text'
                    /> */}
                  </ListItem>,
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <p>kajdsfnjkasdnvjknadkjvnsjdnvasdfsdfsdksjdfngksdf</p>
                    {/* <ListItemText
                      primary="Single-line item"
                      secondary='Secondary Text'
                    /> */}
                  </ListItem>,
              </List>
            </div>
    );
  }
}

// const mapStateToProps = (state) => {

//   let companyProfileUpdateWorkspace = state.companyProfileUpdateWorkspace ? state.companyProfileUpdateWorkspace : "";

//   return {
//       loginState: state.loginState,
//       companyProfileUpdateWorkspace: companyProfileUpdateWorkspace
//   }
// }

const mapDispatchToProps = dispatch => ({
  onInit: () => {
      dispatch(actAppListFetch());
  },
})

const AppListContainer = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(AppList));

export default AppListContainer;