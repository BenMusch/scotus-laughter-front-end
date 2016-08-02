import React from 'react'
import ScotusLaughterAPI from '../../utils/scotus_laughter_api'
import LineGroup from './LineGroup'

class Case extends React.Component {
  constructor(props) {
    super(props);
    this.state = {case: {lines: []}};
  }
  componentWillMount() {
    ScotusLaughterAPI.getCase(this.props.params.docketNum)
    .then((caseInfo) => this.setState({case: caseInfo}));
  }
  render() {
    let lineGroups = this.state.case.lines
    .map((lineGroup, i) => <LineGroup lines={lineGroup} key={i} />)
    return (
      <div className="case-container col-md-8 col-md-offset-2">
        <center>
          <h1>{this.state.case.title}</h1>
          <span>
            <b>Date heard:</b> { this.state.case.date }<br/>
            <b>Term:</b> { this.state.case.term }
          </span>
          <br/>
          <span>
            <a href={ this.state.case.transcript } target="_blank">Transcript PDF</a>
            &nbsp;| <a href={ this.oyezLink() } target="_blank">Oyez</a>
          </span>
        </center>
        {lineGroups}
      </div>
    )
  }
  oyezLink() {
    if (this.state.case.docket_num) {
      return "https://www.oyez.org/cases/" + this.state.case.term + "/"
        + this.state.case.docket_num;
    }
  }
}

export default Case
