import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openPopper, closePopper } from "../actions"
import {
  ITD_PATH_SELECTOR_FILL_ON,
  ITD_PATH_SELECTOR_FILL_OFF,
  ITD_PATH_SELECTOR_BLEND_MODE
} from '../config'

class PathSelector extends Component {
  
  state = {
    isOn: false
  }
  
  onEnter = (event) => {
    this.setState({ isOn: true })
    this.props.dispatch(openPopper(this.props.id, event.target))
  }
  
  onLeave = () => {
    this.setState({ isOn: false })
    this.props.dispatch(closePopper())
  }
  
  render() {
    
    return (
      <path
        style={{
          position: 'absolute',
          left: this.props.left,
          top: this.props.top,
          width: this.props.width,
          height: this.props.height,
          mixBlendMode: ITD_PATH_SELECTOR_BLEND_MODE
        }}
        d={"M " + this.props.path}
        fill={this.state.isOn ? ITD_PATH_SELECTOR_FILL_ON : ITD_PATH_SELECTOR_FILL_OFF}
        onTouchEnd={this.onLeave}
        onTouchStart={this.onEnter}
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
      >
      </path>
    )
  }
}

PathSelector.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    isPopperOpen: state.isPopperOpen
  }
}

export default connect(mapStateToProps)(PathSelector)
