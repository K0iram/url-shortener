import React, { useState } from 'react';
import LinkForm from '../LinkContainer/LinkForm'
import LinkDisplay from '../LinkContainer/LinkDisplay'
import { getShortUrl } from '../API/getShortUrl'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './index.css'

const LinkContainer = () => {
  const [shortUrl, setShortUrl] = useState('')
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <Paper className="container">
      <Typography variant="h2" gutterBottom>
        Link Shortener
      </Typography>
      <LinkForm
        getShortUrl={getShortUrl}
        setUrl={setUrl}
        setShortUrl={setShortUrl}
        setLoading={setLoading}
        setError={setError}
        url={url}
        shortUrl={shortUrl}
        error={error}
      />
      <LinkDisplay
        setOpen={setOpen}
        setShortUrl={setShortUrl}
        shortUrl={shortUrl}
        loading={loading}
        open={open}
      />
    </Paper>
  );
}

export default LinkContainer