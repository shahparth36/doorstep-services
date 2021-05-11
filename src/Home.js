import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Home.css';

const useStyles = makeStyles((theme) => ({
    root              : {
        flexGrow : 1
    },
    title             : {
        fontFamily     : 'Roboto',
        textTransform  : 'uppercase',
        fontWeight     : '400',
        letterSpacing  : '0.1rem',
        fontSize       : '1.2rem',
        textDecoration : 'none',
        color          : 'white'
    },
    content           : {
        display        : 'flex',
        flexDirection  : 'column',
        justifyContent : 'center',
        marginLeft     : theme.spacing(2),
        height         : '100vh',
        zIndex         : 999
    },
    description       : {
        fontFamily    : 'Roboto',
        fontWeight    : '400',
        fontSize      : '3rem',
        letterSpacing : '0.2rem',
        color         : 'white'
    },
    secondDescription : {
        fontFamily    : 'Roboto',
        fontWeight    : '400',
        fontSize      : '3rem',
        letterSpacing : '0.2rem',
        marginBottom  : '40px',
        color         : 'white'
    },
    contentButton     : {
        width         : '10vw',
        height        : '4vw',
        letterSpacing : '0.1rem'
    },
    navButton         : {
        letterSpacing : '0.1rem',
        color         : 'white'
    },
    link              : {
        width          : '10vw',
        textDecoration : 'none'
    },
    appBar            : {
        display        : 'flex',
        justifyContent : 'space-between'
    },
    main              : {
        position : 'fixed !important'
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ul className="slideshow">
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
            <div className={classes.main}>
                <AppBar position="fixed">
                    <Toolbar className={classes.appBar}>
                        <Link className={classes.title} to="/">
                            Doorstep Services
                        </Link>
                        <Link className={classes.link} to="/city">
                            <Button className={classes.navButton}>LETS ANALYZE</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <div className={classes.content}>
                    <Typography className={classes.description}>Providing Services At</Typography>
                    <Typography className={classes.secondDescription}>Your Doorstep</Typography>
                    <Link className={classes.link} to="/city">
                        <Button className={classes.contentButton} variant="contained" color="primary">
                            LETS ANALYZE
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
