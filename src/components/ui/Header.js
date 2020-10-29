import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import webdesigncompanylogo from "../../assets/webdesigncompanylogo.svg";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "#fff" : "transparent",
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: "3rem",
    [theme.breakpoints.down("md")]: {
      height: "2.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "1rem",
    marginLeft: "25px",
  },
  menu: {
    backgroundColor: theme.palette.common.custom,
    color: theme.palette.common.white,
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    "&:hover": {
      color: theme.palette.common.green,
    },
  },
  menuItemSelected: {
    color: theme.palette.common.green,
  },
  drawerIcon: {
    height: "2rem",
    width: "2rem",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      width: "12rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "9rem",
    }
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.black,
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      name: "Services",
      link: "/web-development-services",
      activeIndex: 2,
      selectedIndex: 0,
    },
    {
      name: "Web Design",
      link: "/web-design-service",
      activeIndex: 2,
      selectedIndex: 1,
    },
    {
      name: "E-commerce",
      link: "/e-commerce-web-development",
      activeIndex: 2,
      selectedIndex: 2,
    },
    { name: "SEO", link: "/website-seo", activeIndex: 2, selectedIndex: 3 },
    {
      name: "Web App Development",
      link: "/web-app-development",
      activeIndex: 2,
      selectedIndex: 4,
    },
    {
      name: "Mobile App Development",
      link: "/mobile-app-development",
      activeIndex: 2,
      selectedIndex: 5,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "Work", link: "/web-design-work", activeIndex: 1 },
    {
      name: "Services",
      link: "/web-development-services",
      activeIndex: 2,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHasPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "About", link: "/about-iframe-web-design-agency", activeIndex: 3 },
    { name: "Blog", link: "/dublin-web-design-blog", activeIndex: 4 },
    { name: "Contact Us", link: "/contact", activeIndex: 5 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selected !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{style: {background:'transparent'}}}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHasPopup}
            onMouseOver={route.mouseOver}
            disableRipple
          />
        ))}
      </Tabs>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        component={Link}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{zIndex: 1302}}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              handleClose();
              setValue(2);
            }}
            selected={i === selectedIndex && value === 2}
            component={Link}
            to={option.link}
            classes={{
              root: classes.menuItem,
              selected: classes.menuItemSelected,
            }}
            disableRipple
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{selected: classes.drawerItemSelected}}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItem}
                onClick={() => setOpenDrawer(false)}
              >{route.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Button
                className={classes.logoContainer}
                indicatorcolor="transparent"
                component={Link}
                to="/"
                onClick={() => setValue(0)}
                disableRipple
              >
                <img
                  src={webdesigncompanylogo}
                  className={classes.logo}
                  alt="iframe webdesign company logo"
                />
              </Button>
              {matches ? drawer : tabs}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
