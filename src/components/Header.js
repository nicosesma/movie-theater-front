import React, { Component } from 'react'

import ZipcodeForm from './ZipcodeForm.js'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ZipcodeForm onZipCode={this.props.onZipCode} onToggle={this.props.onToggle} />
      </div>

    )
  }
}
export default Header