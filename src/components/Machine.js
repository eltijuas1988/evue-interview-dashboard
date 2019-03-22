import * as React from 'react'
import injectSheet from 'react-jss'
import {Dialog, DialogTitle} from '../material-ui'
import {TEAL} from '../constants'
import ProgressCircle from './ProgressCircle'

class Machine extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showDetails: false,
    }
  }

  handleClose() {
    this.setState({
      showDetails: false,
    })
  }

  handleClick() {
    this.setState({
      showDetails: true
    })
  }

  determineEfficiencyColor({value}) {
    let color = "red"

    if (value >= 80) {
      color = "green"

    } else if (value > 60 && value < 80) {
      color = "yellow"
    }

    return color
  }

  render() {
    const {classes, id, name, efficiency, fault, type} = this.props

    return (
      <React.Fragment>
        <div className={classes.root} onClick={() => this.handleClick()}>
          <div className={classes.name}>{name}</div>
          <ProgressCircle
            value={efficiency}
            color={this.determineEfficiencyColor({value: efficiency})}
          />
          <div>{efficiency}</div>
        </div>

        <Dialog
          onClose={() => this.handleClose()}
          open={this.state.showDetails}
        >
          <div className={classes.dialog}>
            <DialogTitle className={classes.dialogTitle}>
              {name}
            </DialogTitle>
            <div className={classes.dialogContent}>
              <div>{id}</div>
              <div>{efficiency}</div>
              <div>{`${fault}`}</div>
              <div>{type}</div>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    )
  }
}

const styles = {
  root: {
    width: 125,
    height: 125,
    padding: 10,
    color: "white",
    backgroundColor: "black",
    border: ["2px", "solid", TEAL],
    borderRadius: 5,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  name: {
    fontSize: 18,
    marginBottom: 15,
  },
  dialog: {
    padding: 20,
  },
  dialogTitle: {
    padding: 0,
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}

export default injectSheet(styles)(Machine)
