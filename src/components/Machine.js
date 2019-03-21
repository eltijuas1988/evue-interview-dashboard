import * as React from 'react'
import injectSheet from 'react-jss'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import {TEAL} from '../constants'

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
    const {classes, id, name, efficiency, fault} = this.props

    return (
      <React.Fragment>
        <div className={classes.root} onClick={() => this.handleClick()}>
          <div>{id}</div>
          <div>{name}</div>
          <div>{efficiency}</div>
          <div>{`${fault}`}</div>
        </div>

        <Dialog
          onClose={() => this.handleClose()}
          aria-labelledby="simple-dialog-title"
          open={this.state.showDetails}
        >
          <DialogTitle id="simple-dialog-title">Machine Details</DialogTitle>
          <div>My Machine Details Will Go Here</div>
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
    width: 100,
    height: 100,
    padding: 10,
    color: props => determineEfficiencyColor({efficiency: props.efficiency}),
    backgroundColor: "black",
    border: ["2px", "solid", TEAL],
    borderRadius: 5,
    margin: 5,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
}

export default injectSheet(styles)(Machine)
