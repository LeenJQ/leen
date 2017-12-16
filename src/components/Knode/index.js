import React, { Component } from 'react';

class Knode extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      title,
      content,
      links
    } = this.props
    
    return (
      <div>{content}</div>
    )
  }
}