import * as React from 'react'
import {setInterval} from 'core-js'
import {connect} from 'react-redux'

const machineStyle = {
  width: 100,
  height: 100,
  padding: 10,
  backgroundColor: "black",
  margin: 5,
}

class PlantDashboard extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      plantMachines: []
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.getPlantData(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  storeData(data) {
    if (data && data.areas) {
      this.setState({
        plantMachines: data.areas
      })
    }
  }

  getPlantData() {
    fetch("http://demo.etechsystems.com/interview_problem_data.json")
      .then(res => res.json())
      .then(response => this.storeData(response))
      .catch(error => console.log(error))
  }

  renderPlantMachines() {
    const {plantMachines} = this.state

    return plantMachines.map(machine => {
      const {id, name, efficiency, fault} = machine
      let color = "red"
      if (efficiency >= 80) {
        color = "green"
      } else if (efficiency > 60 && efficiency < 80) {
        color = "yellow"
      }

      const styles = {
        ...machineStyle,
        color,
      }

      return (
        <div key={id} style={styles}>
          <div>{id}</div>
          <div>{name}</div>
          <div>{efficiency}</div>
          <div>{`${fault}`}</div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.areas)
    return (
      <div>
        <div>PlantDashboard</div>
        {this.renderPlantMachines()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {areas} = state

  return {areas}
}

export default connect(mapStateToProps)(PlantDashboard)
