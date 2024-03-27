import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";

function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img src="" style={{ display: 'none' }}  />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor:'blue',
        }}
        style={{ backgroundRepeat:"no-repeat" ,backgroundImage:"url('https://i.pinimg.com/originals/9d/14/99/9d14993ac8a8f5e121e5132c46db6b84.gif')",backgroundSize:"100% 100%"}}
        />
      <Grid container>
        <Grid item md={3}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 8 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h1" color="inherit" style={{fontFamily:'fantasy'}}>
             Connect My Trip
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
             ENJOY YOUR TRIP
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainFeaturedPost;