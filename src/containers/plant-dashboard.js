import * as React from 'react'
import { setInterval } from 'core-js';

class PlantDashboard extends React.PureComponent {
  componentDidMount() {
    this.timer = setInterval(() => this.getPlantData(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  getPlantData() {
    fetch("http://demo.etechsystems.com/interview_problem_data.json")
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return <div>Plant Dashboard</div>
  }
}

export default PlantDashboard
