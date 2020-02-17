import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import PathSelector from "./PathSelector";
import selectors from '../data/selectors'
import sec_image from "./seccion_a64";
import "./no_select.css"

// TODO: to use 'withStyles' is an overkill. Just embedd the styles in the tags

const styles = {
  imgContainer: {
    width: 800,
    height: 600,
    backgroundImage: `url(data:image/png;base64,${sec_image})`
  },
  selectorsContainer: {
    position: 'relative',
    width: 800,
    height: 600,
  },
  popover: {
    pointerEvents: 'none',
  },
}

class Concept extends Component {
  
  partList = {
    "32": ["11710630400", "INTERCAMBIADOR DE CALOR PRIME HT 240/ DUOTEC 24-28", "701.67"],
    "35": ["11710630400", "ESTANQUE EXP. DUO-TEC COMPACT 24/28 RECT. L.7", "111.67"]
  }
  header = ["Code", "Description", "Price"]
  rowSet = {
    "35": ["35"],
    "76": ["32", "35"]
  }
  
  render() {
    
    const { classes } = this.props;
    
    return (
      <div>
        <header>
          <h2>Title</h2>
          <h3>Subtitle</h3>
        </header>
        <div className={classes.imgContainer}>
          <svg className={[classes.selectorsContainer, "selectDisabled"].join(" ")}>
            {selectors.map((el, index) => (
              <PathSelector
                key={index}
                id={el.id}
                path={el.path}
              />
              ))}
          </svg>
        </div>
        {this.props.currentPart && !!this.rowSet[this.props.currentPart] &&
        <Popover
          open={this.props.isPopperOpen}
          className={classes.popover}
          anchorEl={this.props.popperAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <table>
            <thead>
            <tr>
              {this.header.map((el, index) => (
                <th key={index}><Typography>{el}</Typography></th>
              ))}
            </tr>
            </thead>
            <tbody>
            {this.rowSet[this.props.currentPart].map((el, index) => {
              return <tr key={index}>{this.partList[el].map((e, i) => (
                <td key={i}><Typography>{e}</Typography></td>
              ))}</tr>
            })}
            </tbody>
          </table>
        </Popover>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isPopperOpen: state.isPopperOpen,
    popperAnchorEl: state.popperAnchorEl,
    currentPart: state.currentPart
  }
}

export default compose(connect(mapStateToProps), withStyles(styles))(Concept)
