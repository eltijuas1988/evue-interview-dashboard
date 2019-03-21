import * as React from 'react'
import {setInterval} from 'core-js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as areaActions from '../actions/areas'
import {renderChildrenWithProps} from './utils'

class Equipment extends React.PureComponent {
  componentDidMount() {
    const {fetchPlantData} = this.props.actions

    this.timer = setInterval(() => fetchPlantData(), 5000)
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

  render() {
    const {children, areas} = this.props
    const props = {
      machines: areas.areas
    }

    return (
      <React.Fragment>
        {renderChildrenWithProps({children, props})}
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
