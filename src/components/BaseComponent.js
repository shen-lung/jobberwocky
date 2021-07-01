import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Tab,
    Tabs,
    Typography,
    Box,
    makeStyles,
    Grid,
    FormControlLabel,
    Switch,
} from '@material-ui/core'

import PostJobComponent from './PostJobComponent'
import OpportunitiesComponent from './OpportunitiesComponent'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Container className="box_content">
                <Box>
                    {children}
                </Box>
            </Container>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(() => ({
    dataContent: {
      display: 'flex',
    },
}));

export default function BaseComponent() {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [switchValue, setSwitchValue] = useState(localStorage.getItem('suscribeValue') === 'true' );
    console.log(switchValue)
    const handleTabChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleSwitchChange = () => {
        setSwitchValue(!switchValue)
        localStorage.setItem('suscribeValue', !switchValue)
    }
    
    return (
        <Container>
            <Grid item xs={12}>
                <Typography variant="h4" className="title_position">
                    The World of Employment
                </Typography>
            </Grid>
            <Grid item xs={12} className="suscribe-section">
                <FormControlLabel
                    control={
                        <Switch
                            checked={switchValue}
                            onChange={handleSwitchChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Subscribe for new jobs"
                />
            </Grid>
            <Grid item xs={12} className={classes.dataContent}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleTabChange}
                    aria-label="Vertical tabs example"
                >
                    <Tab label="Post jobs" {...a11yProps(0)} />
                    <Tab label="Opportunities" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0} className="data-section">
                    <PostJobComponent switchSuscribeValue={switchValue} />
                </TabPanel>
                <TabPanel value={value} index={1} className="data-section">
                    <OpportunitiesComponent />
                </TabPanel>
            </Grid>
        </Container>
    );
}
 