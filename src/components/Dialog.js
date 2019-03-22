import * as React from 'react'
import injectSheet from 'react-jss'
import {
  Dialog as MUIDialog,
  DialogTitle as MUIDialogTitle
} from '../material-ui'

class Dialog extends React.PureComponent {
  handleClose() {
    this.props.onClose()
  }

  render() {
    const {classes, open, name, children} = this.props

    return (
      <MUIDialog onClose={() => this.handleClose()} open={open}>
        <div className={classes.dialog}>
          <MUIDialogTitle className={classes.dialogTitle}>
            {name}
          </MUIDialogTitle>

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
  dialogTitle: {
    padding: 0,
  },
}

export default injectSheet(styles)(Dialog)
