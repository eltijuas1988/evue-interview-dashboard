import * as React from 'react'
import {setInterval} from 'core-js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as areaActions from '../actions/areas'
import {renderChildrenWithProps} from './utils'

class Equipment extends React.PureComponent {
  componentDidMount() {
    const {fetchPlantData} = this.props.actions

    this.timer = setInterval(() => fetchPlantData(), 10000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)

    this.timer = null
  }

  storeData({data}) {
    if (!data) return null
    const {updatePlantData} = this.props.actions

    updatePlantData({data})
  }

  render() {
    const {children, areas, other} = this.props
    const props = {
      ...other,
      machines: areas
    }

    return renderChildrenWithProps({children, props})
  }
}

const mapStateToProps = state => {
  const {groupedByArray} = state.areas

  return {
    areas: groupedByArray,
  }
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
