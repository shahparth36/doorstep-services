import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './CityInput.css';

const useStyles = makeStyles((theme) => ({
    appBar       : {
        display        : 'flex',
        justifyContent : 'space-between'
    },
    title        : {
        fontFamily     : 'Roboto',
        textTransform  : 'uppercase',
        fontWeight     : '400',
        letterSpacing  : '0.1rem',
        fontSize       : '1.2rem',
        textDecoration : 'none',
        color          : 'white'
    },
    formControl  : {
        margin     : theme.spacing(1),
        minWidth   : 120,
        maxWidth   : 150,
        marginLeft : 100
    },
    selectEmpty  : {
        marginTop : theme.spacing(2)
    },
    myInputLabel : {
        color : 'white'
    },
    link         : {
        minWidth       : 120,
        maxWidth       : 150,
        textDecoration : 'none',
        marginTop      : 10,
        marginLeft     : 98
    }
}));

function CityInput() {
    const classes = useStyles();

    const [ city, setCity ] = React.useState('Mumbai');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="CityInput">
            <AppBar position="fixed">
                <Toolbar className={classes.appBar}>
                    <Link className={classes.title} to="/">
                        Doorstep Services
                    </Link>
                </Toolbar>
            </AppBar>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.myInputLabel} id="demo-simple-select-label">
                    Select City
                </InputLabel>
                <Select
                    className={classes.myInputLabel}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handleChange}>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                </Select>
            </FormControl>
            <Link className={classes.link} to={`/filters/${city}`}>
                <Button className="CityInput-Button" variant="outlined" color="secondary">
                    View Filters
                </Button>
            </Link>
        </div>
    );
}

export default CityInput;
