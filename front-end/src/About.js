import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

const About = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(res => setAboutData(res.data))
      .catch(err => console.error(err))
  }, [])

  if (!aboutData) return <p>Loading...</p>

  return (
    <div className="About-page">
      <h1>{aboutData.title}</h1>
      <img src={aboutData.imageUrl} alt="Me" className="About-image" />
      {aboutData.paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  )
}

export default About