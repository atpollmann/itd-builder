import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openPopper, closePopper } from "../actions"

class Selector extends Component {
  
  onEnter = () => {
    this.props.dispatch(openPopper(this.props.id))
  }
  
  onLeave = () => {
    this.props.dispatch(closePopper())
  }

  render() {
    
    return (
      <div
        style={{
          position: 'absolute',
          left: this.props.left,
          top: this.props.top,
          width: this.props.width,
          height: this.props.height,
          border: '2px solid green',
          backgroundColor: 'rgba(0,255,0,0.2)'
        }}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
      </div>
    )
  }
}

Selector.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    popperOpen: state.popperOpen
  }
}

export default connect(mapStateToProps)(Selector)
