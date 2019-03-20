import * as React from 'react'
import {setInterval} from 'core-js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as areaActions from '../actions/areas'

const machineStyle = {
  width: 100,
  height: 100,
  padding: 10,
  backgroundColor: "black",
  margin: 5,
}

class PlantDashboard extends React.PureComponent {
  componentDidMount() {
    this.timer = setInterval(() => this.getPlantData(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  storeData({data}) {
    if (data) {
      const {getMachineUpdates} = this.props.actions
      getMachineUpdates({data})
    }
  }

  getPlantData() {
    fetch("http://demo.etechsystems.com/interview_problem_data.json")
      .then(res => res.json())
      .then(response => this.storeData({data: response.areas}))
      .catch(error => console.log(error))
  }

  renderPlantMachines() {
    const {areas} = this.props.areas
    if (!areas) return null

    return areas.map(machine => {
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

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators(areaActions, dispatch)

  return {
    actions,
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PlantDashboard)
