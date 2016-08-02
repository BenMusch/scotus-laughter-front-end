import React from 'react'
import Line from './Line'

class LineGroup extends React.Component {
  render() {
    let lines = this.props.lines
    .map((line, i) => {
      return (<Line line={line} key={i} />)
    })
    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-body">
            {lines}
          </div>
        </div>
      </div>
    )
  }
}

LineGroup.propTypes = {
  lines: React.PropTypes.array.isRequired
}

export default LineGroup
