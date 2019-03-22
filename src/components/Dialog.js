import * as React from 'react'
import injectSheet from 'react-jss'
import {Dialog as MUIDialog} from '../material-ui'

class Dialog extends React.PureComponent {
  handleClose() {
    this.props.onClose()
  }

  render() {
    const {classes, open, children} = this.props

    return (
      <MUIDialog onClose={() => this.handleClose()} open={open}>
        <div className={classes.dialog}>
          {children}
        </div>
      </MUIDialog>
    )
  }
}

const styles = {
  dialog: {
    padding: 20,
  },
}

export default injectSheet(styles)(Dialog)
