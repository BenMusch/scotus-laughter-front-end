import React from 'react'
import { Link } from 'react-router'
import urls from '../../config/urls'
import ScotusLaughterAPI from '../../utils/scotus_laughter_api'

class Speaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {speaker: {name: ''}, cases: []};
  }
  componentWillMount() {
    ScotusLaughterAPI.getSpeaker(this.props.params.speakerId)
    .then((speaker) => this.setState({speaker: speaker}))

    ScotusLaughterAPI.getCasesForSpeaker(this.props.params.speakerId)
    .then((cases) => this.setState({cases: cases}))
  }
  render() {
    let cases = this.state.cases
    .map((caseInfo, i) => {
      return (
        <li key={i}>
          <Link to={urls.case(caseInfo)}>
            {caseInfo.title}
          </Link>
        </li>)
    })
    return (
      <div className="speaker">
        <h1>{this.state.speaker.name}</h1>
        <ul>
          {cases}
        </ul>
      </div>
    )
  }
}

export default Speaker
