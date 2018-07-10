import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openPopper, closePopper } from "../actions"
import {
  ITD_SELECTOR_BG_ON,
  ITD_SELECTOR_BG_OFF,
  ITD_SELECTOR_BO_ON,
  ITD_SELECTOR_BO_OFF,
  ITD_SELECTOR_TYPE,
  ITD_SELECTOR_RADIUS
} from '../config'

class Selector extends Component {
  
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
  
  baseStyle = {
    position: 'absolute',
    left: this.props.left,
    top: this.props.top,
    width: this.props.width,
    height: this.props.height,
  }
  
  boxStyle = {
    ...this.baseStyle,
    borderRadius: `${ITD_SELECTOR_RADIUS}px`,
  }
  
  circleStyle = {
    ...this.baseStyle,
    width: this.props.width,
    height: this.props.width,
    borderRadius: '50%'
  }

  render() {
    
    const selectorStyle = ITD_SELECTOR_TYPE === 'box' ? this.boxStyle : this.circleStyle
    
    return (
      <div
        style={{
          ...selectorStyle,
          border: this.state.isOn ? ITD_SELECTOR_BO_ON : ITD_SELECTOR_BO_OFF,
          backgroundColor: this.state.isOn ? ITD_SELECTOR_BG_ON : ITD_SELECTOR_BG_OFF
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
  height: PropTypes.number
}

function mapStateToProps(state) {
  return {
    isPopperOpen: state.isPopperOpen
  }
}

export default connect(mapStateToProps)(Selector)
