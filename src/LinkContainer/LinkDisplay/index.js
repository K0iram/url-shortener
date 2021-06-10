import React from 'react';

const LinkDisplay = ({shortUrl, setShortUrl}) => {
  return (
      <div style={{height: 50, weight: 500, textAlign: 'center', border: '1px solid #000', marginTop: 100}}>
        <h4 onClick={navigator.clipboard.writeText(shortUrl)}>{shortUrl}</h4>
        <span onClick={() => setShortUrl('')}>Clear</span>
      </div>
  )
}

export default LinkDisplay