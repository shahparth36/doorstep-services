import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import maps from './db/db';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root        : {
        backgroundImage :
            'url(https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFwfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1550&q=60)'
    },
    title       : {
        fontFamily     : 'Roboto',
        textTransform  : 'uppercase',
        fontWeight     : '400',
        letterSpacing  : '0.1rem',
        fontSize       : '1.2rem',
        textDecoration : 'none',
        color          : '#FFFFFF'
    },
    navButton   : {
        letterSpacing : '0.1rem',
        color         : 'white'
    },
    link        : {
        textDecoration : 'none'
    },
    appBar      : {
        display        : 'flex',
        justifyContent : 'space-between'
    },
    content     : {
        display        : 'flex',
        flexDirection  : 'row',
        justifyContent : 'space-around',
        alignItems     : 'center',
        height         : '100%'
    },
    filters     : {
        marginBottom : '12rem'
    },
    analysis    : {
        textAlign : 'center'
    },
    formControl : {
        margin   : theme.spacing(1),
        minWidth : 200
    },
    selectEmpty : {
        marginTop : theme.spacing(2)
    },
    viewButton  : {
        margin : '20px'
    },
    graph       : {
        marginTop    : theme.spacing(10),
        width        : 800,
        height       : 400,
        borderRadius : '2%',
        boxShadow    : '0 10px 6px -5px #777'
    },
    pieChart    : {
        marginTop    : theme.spacing(4),
        width        : 400,
        height       : 400,
        borderRadius : '2%',
        margin       : theme.spacing(2),
        boxShadow    : '0 10px 6px -5px #777'
    },
    factText    : {
        margin     : theme.spacing(7),
        marginLeft : theme.spacing(2),
        fontSize   : '1.2rem'
    },
    factIcon    : {
        marginTop  : theme.spacing(6),
        marginLeft : theme.spacing(2),
        width      : 50,
        height     : 50
    },
    factBox     : {
        display        : 'flex',
        justifyContent : 'center'
    }
}));

function FilterMaps(props) {
    const classes = useStyles();
    const [ mapTitle, setMapTitle ] = useState('');
    const [ mapUrl, setMapUrl ] = useState('');
    const [ mapFilter, setMapFilter ] = useState('');
    const [ filters, setFilters ] = useState([]);

    const handleChange = (evt) => {
        setMapTitle(evt.target.value);
        setFilters(maps[evt.target.value]);
    };

    const handleFinalFilterChange = (evt) => {
        setMapFilter(evt.target.value);
        const mapFound = filters.find((element) => element.title === evt.target.value);
        setMapUrl(mapFound.url);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.appBar}>
                    <Link className={classes.title} to="/">
                        Doorstep Services
                    </Link>
                    <Link className={classes.link} to="/city">
                        <Button className={classes.navButton}>CHOOSE CITY</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.content}>
                <div className={classes.filters}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Select Filter</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={mapTitle}
                            onChange={handleChange}
                            label="Select Filter">
                            <MenuItem value="Hotspot Analysis">Hotspot Analysis</MenuItem>
                            <MenuItem value="Mode Of Payment">Mode Of Payment</MenuItem>
                            <MenuItem value="No Of Orders Per User">No Of Orders Per User</MenuItem>
                            <MenuItem value="Order Value">Order Value</MenuItem>
                            <MenuItem value="Type Of Membership">Type Of Membership</MenuItem>
                            <MenuItem value="User Age">User Age</MenuItem>
                            <MenuItem value="User Device">User Device</MenuItem>
                            <MenuItem value="Others">Others</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label1">{mapTitle}</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label1"
                            id="demo-simple-select-outlined"
                            value={mapFilter}
                            onChange={handleFinalFilterChange}
                            label="Select Filter">
                            {filters.map((element) => (
                                <MenuItem key={element.id} value={element.title}>
                                    {element.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <div className={classes.viewButton}>
                        <Button href={mapUrl} variant="contained" color="primary">
                            View Map
                        </Button>
                    </div>
                </div>
                <div className={classes.analysis}>
                    <img
                        className={classes.graph}
                        src="https://res.cloudinary.com/dcimcuqjm/image/upload/v1620741206/Graph_rgina9.png"
                        alt="..."
                    />
                    <div className={classes.factBox}>
                        <img
                            className={classes.factIcon}
                            src="https://res.cloudinary.com/dcimcuqjm/image/upload/v1620741927/fact_z8ivhj.png"
                            alt="..."
                        />
                        <Typography className={classes.factText}>
                            The <b>average</b> customer is a <b>47 year</b> old <b>android-user</b> and has
                            <b> placed a total of 8 orders</b>
                        </Typography>
                    </div>
                    <img
                        className={classes.pieChart}
                        src="https://res.cloudinary.com/dcimcuqjm/image/upload/v1620741262/pieChart_1_wrklgm.png"
                        alt="..."
                    />
                    <img
                        className={classes.pieChart}
                        src="https://res.cloudinary.com/dcimcuqjm/image/upload/v1620741297/pieChart_2_q7ro7q.png"
                        alt="..."
                    />
                </div>
            </div>
        </div>
    );
}

export default FilterMaps;
