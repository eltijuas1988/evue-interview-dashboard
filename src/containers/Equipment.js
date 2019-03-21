import * as React from 'react'
import {setInterval} from 'core-js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as areaActions from '../actions/areas'
import {renderChildrenWithProps} from './utils'

class Equipment extends React.PureComponent {
  componentDidMount() {
    this.timer = setInterval(() => this.getPlantData(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  storeData({data}) {
    if (data) {
      const {updatePlantData} = this.props.actions
      updatePlantData({data})
    }
  }

  getPlantData() {
    fetch("http://demo.etechsystems.com/interview_problem_data.json")
      .then(res => res.json())
      .then(response => this.storeData({data: response.areas}))
      .catch(error => console.log(error))
  }

  render() {
    const {children, areas} = this.props

    return (
      <React.Fragment>
        <div>Equipment Dashboard</div>
        {renderChildrenWithProps({children, props: areas})}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const {areas} = state

  return {areas}
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(areaActions, dispatch)

  return {
    actions,
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Equipment)
