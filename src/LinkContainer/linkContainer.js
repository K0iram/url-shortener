import React, { useState } from 'react';
import LinkForm from '../LinkContainer/LinkForm'
import LinkDisplay from '../LinkContainer/LinkDisplay'
import { getShortUrl } from '../API/getShortUrl'

const LinkContainer = () => {
  const [shortUrl, setShortUrl] = useState('')
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <div>
      <h1>Link Shorten</h1>
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
      {loading &&
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      }
      {shortUrl &&
        <LinkDisplay shortUrl={shortUrl} setShortUrl={setShortUrl}/>
      }
    </div>
  );
}

export default LinkContainer