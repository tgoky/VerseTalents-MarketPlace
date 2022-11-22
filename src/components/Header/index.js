import React from 'react';
import {Box, Grid, typography, Button, Typography} from '@material-ui/core'

export default (props) => 
<Box p={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
        <Grid item xs={10}>
            <Box display="flex" justifyContent="space-between">
            <Typography variant="h5">
        VerseTalent MarketPlace
    </Typography>
    <Button variant="contained" color="primary" disableElevation>Post a Job</Button>
            </Box>
        </Grid>
    </Grid>
</Box>