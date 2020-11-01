import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import Hidden from "@material-ui/core/Hidden"


import footerbackground from "../../assets/footerbackground.png"
import footercompanylogo from "../../assets/footercompanylogo.svg";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';



const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.footer,
        backgroundImage: `url(${footerbackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        width: "100%",
        color: theme.palette.common.white,
        // zIndex: 1302,
        // position: "relative",
    },
    logo: {
        height: "2rem",
        // [theme.breakpoints.down("md")]: {
        //   height: "2.5rem",
        // },
        // [theme.breakpoints.down("xs")]: {
        //   height: "2rem",
        // },
      },
    link: {
        color: theme.palette.common.white,
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "Bold",
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.common.green,
        }
    },
    icon: {
        color: theme.palette.common.white,
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "Bold",
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.common.green,
        }
    },
    mainContainer: {
        paddingTop: "1rem",
    },
    gridItem: {
        margin: "3rem",
        [theme.breakpoints.down("lg")]: {
            margin: "2rem",
        },
        [theme.breakpoints.down("md")]: {
            margin: "1rem",
        },
    },
    text: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        width: "12rem"
    },
    head: {
        color: theme.palette.common.white,
        fontFamily: "Arial",
        fontSize: "1rem",
        fontWeight: "Bold",
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.common.green,
        }
    },
    footerLine: {
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "#444352",
        width: "80%",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        marginTop: "1rem"
    },
    footerText: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
    }
}))

export default function Footer({value, setValue, selectedIndex, setSelectedIndex }) {
    const classes = useStyles()

    return <React.Fragment><footer className={classes.footer}>
        <Grid container className={classes.mainContainer} justify="center">
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/" onClick={() => setValue(0)} className={classes.link}>
                        <img src={footercompanylogo} className={classes.logo} alt="iframe webdesign company logo footer"
                            />
                    </Grid>
                    <Hidden smDown>
                    <Grid item className={classes.text}>
                        Web design agency that delivers results!
                    </Grid>
                    </Hidden>
                    <Grid item className={classes.link}>
                        <Grid container spacing={2}>
                            {/* Link to social media */}
                            <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" className={classes.link}>
                            <FacebookIcon />
                            </Grid>
                            {/* Link to social media */}
                            <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank" className={classes.link}>
                                <InstagramIcon />
                            </Grid>
                            {/* link to social media */}
                            <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank" className={classes.link}>
                            <TwitterIcon />
                            </Grid>                        
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Hidden smDown>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item className={classes.head}  xs={12}>
                                Quick Links
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item component={Link} to="/" onClick={() => setValue(0)} className={classes.link} >
                                        Home
                                    </Grid>
                                    <Grid item component={Link} to="/web-design-work" onClick={() => setValue(1)} className={classes.link}>
                                        Work
                                    </Grid>
                                    <Grid item component={Link} to="/web-development-services" onClick={() => setValue(2)} className={classes.link}>
                                        Services
                                    </Grid>
                                    <Grid item component={Link} to="/about-iframe-web-design-agency" onClick={() => setValue(3)} className={classes.link}>
                                        About Us
                                    </Grid>
                                    <Grid item component={Link} to="/iframe-web-design-team" className={classes.link}>
                                        Team
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item component={Link} to="/web-design-service" onClick={() => {setValue(2); setSelectedIndex(1)}}className={classes.link}>
                                        Web-Design
                                    </Grid>
                                    <Grid item component={Link} to="/e-commerce-web-development" onClick={() => {setValue(2); setSelectedIndex(2)}} className={classes.link}>
                                        E-Commerce
                                    </Grid>
                                    <Grid item component={Link} to="/website-seo" onClick={() => {setValue(2); setSelectedIndex(3)}} className={classes.link}>
                                        SEO
                                    </Grid>
                                    <Grid item component={Link} to="/web-app-development" onClick={() => {setValue(2); setSelectedIndex(4)}} className={classes.link}>
                                        Web App Development
                                    </Grid>
                                    <Grid item component={Link} to="/mobile-app-development" onClick={() => {setValue(2); setSelectedIndex(5)}}className={classes.link}>
                                        Mobile App Development
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            {/* <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/dublin-web-design-blog" onClick={() => setValue(4)} className={classes.head}>
                        Recent Blog Posts
                    </Grid>
                    Link to blog post
                    <Grid item component={Link} to="/dublin-web-design-blog" onClick={() => setValue(4)} className={classes.link}>
                        Post1
                    </Grid>
                    Link to blog post
                    <Grid item component={Link} to="/dublin-web-design-blog" onClick={() => setValue(4)} className={classes.link}>
                        Post2
                    </Grid>
                    Link to blog post
                    <Grid item component={Link} to="/dublin-web-design-blog" onClick={() => setValue(4)} className={classes.link}>
                        Post3
                    </Grid>
                </Grid>
            </Grid> */}
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/contact" onClick={() => setValue(5)} className={classes.head}>
                        Get in Touch
                    </Grid>
                    {/* Fix the icons */}
                    <Grid item className={classes.link}>
                        <LocationOnIcon className={classes.icon}/> Location: Whitehall Rd, Rathfarnham, Dublin 14
                    </Grid>
                    <Grid item className={classes.link}>
                        <PhoneIcon className={classes.icon}/> Phone: (353) 0899870468
                    </Grid>
                    <Grid item className={classes.link}>
                    <EmailIcon className={classes.icon}/> Email: info@iframewebdesign.com
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Grid item className={classes.footerLine}>
                <Grid container justify="space-between">
                    <Grid item className={classes.footerText}>Copyright @2020. All rights reserved.</Grid>
                    <Grid item className={classes.footerText}>Dublin, Ireland</Grid>
                </Grid>
            </Grid>
        </Grid>
        </footer></React.Fragment>
}