import axios from 'axios'

export const getShortUrl = (url, setUrl, setShortUrl, setLoading, setError) => {
  setLoading(true)
  setShortUrl('')
    const data = {
      long_url: url
    }
    axios.post(
      'https://api-ssl.bitly.com/v4/shorten',
      data,
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_BITLY_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        setTimeout(() => {
          setLoading(false)
          setUrl('')
          setShortUrl(res.data.link)
        }, 2000)
    })
    .catch((err) => {
      setError(err.response.data.description)
    })
  }