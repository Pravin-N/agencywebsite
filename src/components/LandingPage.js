import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import hero from "../../src/assets/hero.jpg"

const useStyles = makeStyles(theme => ({
    
}))

export default function LandingPage() {
    const classes = useStyles();


    return <React.Fragment>
            <Grid container direction="column" >
                <Grid item>
                    <Grid container direction="row" justify="center">
                        <Grid item>
                            <img
                                src={hero}
                                // className={classes.heroSection}
                                alt="hero"
                                />
                        </Grid>
                        <Grid item>
                            <div>
                                
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ React.Fragment>
}