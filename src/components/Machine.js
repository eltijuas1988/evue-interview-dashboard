import * as React from 'react'
import injectSheet from 'react-jss'
import {GRAY, TEAL} from '../constants'
import ProgressCircle from './ProgressCircle'
import Dialog from './Dialog'

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
    const {classes, id, name, fault, idle} = this.props
    const efficiency = idle ? 0 : this.props.efficiency

    return (
      <React.Fragment>
        <div className={classes.root} onClick={() => this.handleClick()}>
          <div className={classes.name}>{name}</div>
          <ProgressCircle
            value={efficiency}
            color={this.determineEfficiencyColor({value: efficiency})}
          />
          <div>{`${efficiency}%`}</div>
        </div>

        <Dialog
          onClose={() => this.handleClose()}
          open={this.state.showDetails}

        >
          <div className={classes.dialogContent}>
            <div className={classes.name}>{name}</div>
            <div>ID: {id}</div>
            <div>Efficiency: {efficiency}</div>
            <div>Faulty: {`${fault}`}</div>
            <div>Idle: {`${idle}`}</div>
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
    border: props => `2px solid ${props.idle ? GRAY : TEAL}`,
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
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}

export default injectSheet(styles)(Machine)
