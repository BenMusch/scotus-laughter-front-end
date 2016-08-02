import React from 'react'
import { Link } from 'react-router'
import urls from '../../config/urls'

class Line extends React.Component {
  render() {
    let lines = this.props.line.lines.map((line, i) => {
      return (<li key={i}>{line.text}</li>)
    })
    return (
      <div className="line">
        <div className="col-md-3">
          <Link to={urls.speaker(this.props.line.speaker)}>
            {this.props.line.speaker.name}:
          </Link>
        </div>
        <div className="col-md-9">
          <ul>
            {lines}
          </ul>
        </div>
      </div>
    )
  }
}

Line.propTypes = {
  line: React.PropTypes.object.isRequired
}

export default Line
