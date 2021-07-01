import React, { useState } from 'react';
import {
    Grid,
    TextField,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Button,
    Typography,
    Card,
    CardContent,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { findJobs } from '../api/InternalJobService'

export default function OpportunitiesComponent() {
    const [position, setPosition] = useState('');
    const [jobType, setJobType] = useState('Full time');
    const [jobsFind, setJobFind] = useState([]);

    const handlePosition = (event) => {
        setPosition(event.target.value)
    };

    const handleJopTypeChange = (event) => {
        setJobType(event.target.value);
    };

    // Return to default values
    const reset = () => {
        setJobType('Full time')
        setPosition('')
    }
    
    // API call to find the job
    const handleFindJob = () => {
        findJobs({
            get: true,
            data: {
                position,
                jobType,
            }
        })
        .then(data => {
            console.log(data.body)
            setJobFind(data.body)
        })

        reset()
    }

    return (
        <Grid item xs={12}>
            <Grid item xs={12}>
                <Typography variant="h6" className="post_job_title">
                    Good luck
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={position}
                    className="form-field"
                    id="job-position"
                    label="Position"
                    variant="outlined"
                    onChange={handlePosition}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset" className="form-field">
                    <FormLabel component="legend">Job type</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={jobType} onChange={handleJopTypeChange}>
                        <FormControlLabel value="Full time" control={<Radio />} label="Full time" />
                        <FormControlLabel value="Part time" control={<Radio />} label="Part time" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid container justify="flex-end">
                <Button
                    className="search-button"
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon />}
                    onClick={handleFindJob}
                >
                    Search
                </Button>
            </Grid>
            <Grid item xs={12}>
                { jobsFind.length !== 0 && jobsFind.map((job, index) => {
                    return (<Card key={index} className="card-content">
                        <CardContent>
                            <Typography color="textSecondary" variant="h5">
                                <strong>{job.position}</strong>
                            </Typography>
                            <Typography color="textSecondary">
                                <strong>Company:</strong> {job.companyName}
                            </Typography>
                            <Typography color="textSecondary">
                                <strong>Job place:</strong> {job.place}
                            </Typography>
                            <Typography color="textSecondary">
                                <strong>Type:</strong> {job.jobType}
                            </Typography>
                            <Typography color="textSecondary">
                                <strong>Linkedin url:</strong> <a href={job.linkedinLink} target="_blank" rel="noreferrer">{job.linkedinLink}</a>
                            </Typography>
                            <Typography color="textSecondary">
                                <strong>Description:</strong> {job.jobDescription}
                            </Typography>
                        </CardContent>
                    </Card>)
                })}
            </Grid>
        </Grid>
    );
}
 