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
} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function PostJobComponent() {
    const [jobTypeValue, setValue] = useState('full_time');

    const handleJopTypeChange = (event) => {
        setValue(event.target.value);
    };
    
    return (
        <Grid item xs={12}>
            <Grid item xs={12}>
                <Typography variant="h6" className="post_job_title">
                    Post your possition
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    className="form-field"
                    required
                    id="company-name"
                    label="Company name"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    className="form-field"
                    required
                    id="job-position"
                    label="Position"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    className="form-field"
                    required
                    id="job-place"
                    label="Place"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    className="form-field"
                    id="linkedin-link"
                    label="Linkedin link"
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset" className="form-field">
                    <FormLabel component="legend">Job type</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={jobTypeValue} onChange={handleJopTypeChange}>
                        <FormControlLabel value="full_time" control={<Radio />} label="Full time" />
                        <FormControlLabel value="part_time" control={<Radio />} label="Part time" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    className="form-field"
                    id="job-description"
                    label="Job description"
                    multiline
                    rows={14}
                    rowsMax={14}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
            <Grid container justify="flex-end">
                <Button
                    className="upload-button"
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
            </Grid>
            
        </Grid>
    );
}
 