import React from 'react'
import { Link } from 'react-router'
import ScotusLaughterAPI from '../../utils/scotus_laughter_api'
import urls from '../../config/urls'

class CasesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cases: [] }
  }
  render() {
    let cases = this.state.cases.map((caseInfo, i) => {
      return (
        <li key={i}>
          <Link to={urls.case(caseInfo)}>{caseInfo.title}</Link>
        </li>
      );
    })
    return (
      <div className="cases-container">
        <h1>Cases List</h1>
        <ul>
          {cases}
        </ul>
      </div>
    );
  }
  componentWillMount() {
    ScotusLaughterAPI.getCases()
    .then((cases) => {
      this.setState({cases: cases})
    });
  }
}

export default CasesList
