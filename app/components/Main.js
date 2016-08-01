import React from 'react'

const Main = (props) => {
  return (
    <div className="main-container">
      <div className="container">{props.children}</div>
    </div>
  )
};

export default Main
