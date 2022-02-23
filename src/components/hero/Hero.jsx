import React from 'react'
import ReactPlayer from 'react-player';
import hero_vid from './hero_vid.mp4'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    paddingBottom: 40
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <ReactPlayer
        url={hero_vid}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h1" className={classes.title}>
            Title Goes Here
          </Typography>
          <Button color="primary" variant="contained">
            Click Me
          </Button>
        </Box>
      </div>
    </section>
  )
}

export default Hero