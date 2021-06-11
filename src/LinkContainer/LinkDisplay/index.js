import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    width: '90%'
  }
});

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LinkDisplay = ({shortUrl, setShortUrl, loading, open, setOpen}) => {
  const classes = useStyles();

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(shortUrl)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if(!shortUrl){
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {loading ? <CircularProgress /> : `Add a link to generate`}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {shortUrl}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={copyToClipBoard} variant="contained" color="primary">Copy</Button>
          <Button size="small" onClick={() => setShortUrl('')} variant="contained" color="secondary">Clear</Button>
        </CardActions>
      </Card>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Short Link Has Been Copied To Your Clipboard!
        </Alert>
      </Snackbar>
    </>
  )
}

export default LinkDisplay