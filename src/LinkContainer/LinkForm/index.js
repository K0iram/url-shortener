import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './index.css'

const LinkForm = ({getShortUrl, setShortUrl, setUrl, url, setLoading, setError, error, shortUrl}) => {

  const onSubmitUrl = e => {
    e.preventDefault()
    getShortUrl(url, setUrl, setShortUrl, setLoading, setError)
  }

  const onChangeUrl = e => {
    if(shortUrl) setShortUrl('')
    if(error) setError('')
    setUrl(e.target.value)
  }

  return (
    <form className="link-form" onSubmit={onSubmitUrl}>
      <div className="input-container">
        <TextField label="Long URL" variant="outlined" value={url} onChange={onChangeUrl} helperText={error} error={!!error} className="link-input"/>
        <Button size="large" type="submit" variant="contained" color="primary">Generate</Button>
      </div>
    </form>
  );
};

export default LinkForm