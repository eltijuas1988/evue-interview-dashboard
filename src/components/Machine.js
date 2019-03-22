import * as React from 'react'
import injectSheet from 'react-jss'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'
import {GRAY, TEAL} from '../constants'

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

  render() {
    const {classes, id, name, efficiency, fault, type} = this.props

    return (
      <React.Fragment>
        <div className={classes.root} onClick={() => this.handleClick()}>
          <div className={classes.name}>{name}</div>
          <div className={classes.circleWrapper}>
            <CircularProgress
              className={classes.circleShadow}
              variant="static"
              value={100}
              thickness={9}
              size={50}
            />
            <CircularProgress
              className={classes.efficiency}
              variant="static"
              value={efficiency}
              thickness={9}
              size={50}
            />
          </div>
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

const determineEfficiencyColor = ({efficiency}) => {
  let color = "red"

  if (efficiency >= 80) {
    color = "green"

  } else if (efficiency > 60 && efficiency < 80) {
    color = "yellow"
  }

  return color
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
  circleWrapper: {
    position: "relative",
  },
  efficiency: {
    color: props => determineEfficiencyColor({efficiency: props.efficiency}),
    position: "absolute",
    left: 38,

  },
  circleShadow: {
    color: GRAY,
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
