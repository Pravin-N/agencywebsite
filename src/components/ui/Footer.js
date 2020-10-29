import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.custom,
        width: "100%",
        color: theme.palette.common.white
    }
}))

export default function Footer(props) {
    const classes = useStyles()

    return <><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer><footer className={classes.footer}>Example Footer</footer></>

}