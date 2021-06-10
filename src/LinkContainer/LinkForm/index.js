import React from 'react';
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
        <input className="link-input" type="text" value={url} onChange={onChangeUrl}/>
        <button className="generate-btn" type="submit">Generate</button>
      </div>
        {error && <span style={{color: 'red'}}>{error}</span>}
    </form>
  );
};

export default LinkForm