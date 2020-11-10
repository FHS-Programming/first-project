import React from "react";
// import logo from "./logo.svg";
import Home from "./Components/Home";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// you have to import all components
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
    const classes = useStyles();
  return (
    <BrowserRouter>
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* added a home route */}

        {/* <Route exact path="/" adds a route in the website
        while component={} what you want to display inside of that
        page*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
