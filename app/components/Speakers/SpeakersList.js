import React from 'react'
import ScotusLaughterAPI from '../../utils/scotus_laughter_api'
import urls from '../../config/urls'
import { Link } from 'react-router'

class SpeakersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {speakers: []}
  }
  componentWillMount() {
    ScotusLaughterAPI.getSpeakers()
    .then((speakers) => this.setState({speakers: speakers}))
  }
  render() {
    let speakers = this.state.speakers
    .map((speaker, i) => <li key={i}><Link to={urls.speaker(speaker)}>{speaker.name}</Link></li>)
    return (
      <div className="speakers">
        <h1>Speakers</h1>
        <ul>{speakers}</ul>
      </div>
    )
  }
}

export default SpeakersList
