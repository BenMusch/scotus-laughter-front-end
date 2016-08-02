import React from 'react'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-md-10 col-md-offset-3">
            <a href="/">Home</a>
          </div>
        </nav>
        <div className="container">{this.props.children}</div>
      </div>
    )
  }
}

export default Main
