import React, { useState } from 'react'
import { send } from 'emailjs-com'
import PropTypes from 'prop-types';
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
import { publishJob } from '../api/InternalJobService'

export default function PostJobComponent( props ) {
    PostJobComponent.propTypes = {
        switchSuscribeValue: PropTypes.bool
    };

    const { switchSuscribeValue } = props
    const [jobType, setJobType] = useState('Full time');
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [place, setPlace] = useState('');
    const [linkedinLink, setLinkedinLink] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const handleJopTypeChange = (event) => {
        setJobType(event.target.value);
    };
    const handleCompanyName = (event) => {
        setCompanyName(event.target.value)
    };
    const handlePosition = (event) => {
        setPosition(event.target.value)
    };
    const handlePlace = (event) => {
        setPlace(event.target.value);
    };
    const handleLinkedinLink = (event) => {
        setLinkedinLink(event.target.value);
    };
    const handleJobDescription = (event) => {
        setJobDescription(event.target.value);
    };

     // Return to default values
    const reset = () => {
        setJobType('Full time')
        setCompanyName('')
        setPosition('')
        setPlace('')
        setLinkedinLink('')
        setJobDescription('')
    }

    const handlePublishJob = () => {
        publishJob({
            get: false,
            data: {
                companyName,
                position,
                place,
                linkedinLink,
                jobType,
                jobDescription,
            }
        })
        .then(status => {
            console.log(status)
            console.log(switchSuscribeValue)

            // We send the email if the status is 200 from the post job response
            // and if suscribe value is True
            if (status === 200 && switchSuscribeValue) {
                const message = `
                    Position: ${position}\n
                    Company name: ${companyName}\n
                    Place: ${place}\n
                    Linkedin link: ${linkedinLink}\n
                    Job type: ${jobType}\n
                    Description: ${jobDescription}\n
                `
                const sendEmilContent = {
                    from_name: 'The World of Employment',
                    to_name: 'user',
                    message,
                    reply_to: '',
                }

                send(
                    'service_6e0rink',
                    'template_9l8r51b',
                    sendEmilContent,
                    'user_4Ib92tE0cGwpnnFRgIqJv',
                )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
            }
        })

        reset()
    }

    return (
        <Grid item xs={12}>
            <Grid item xs={12}>
                <Typography variant="h6" className="post_job_title">
                    Post your possition
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={companyName}
                    className="form-field"
                    id="company-name"
                    label="Company name"
                    variant="outlined"
                    onChange={handleCompanyName}
                    fullWidth
                />
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
                <TextField
                    value={place}
                    className="form-field"
                    id="job-place"
                    label="Place"
                    variant="outlined"
                    onChange={handlePlace}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={linkedinLink}
                    className="form-field"
                    id="linkedin-link"
                    label="Linkedin link"
                    variant="outlined"
                    onChange={handleLinkedinLink}
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
            <Grid item xs={12}>
                <TextField
                    value={jobDescription}
                    className="form-field"
                    id="job-description"
                    label="Job description"
                    multiline
                    rows={6}
                    rowsMax={6}
                    variant="outlined"
                    onChange={handleJobDescription}
                    fullWidth
                />
            </Grid>
            <Grid container justify="flex-end">
                <Button
                    className="upload-button"
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    onClick={handlePublishJob}
                >
                    Upload
                </Button>
            </Grid>
        </Grid>
    );
}
 