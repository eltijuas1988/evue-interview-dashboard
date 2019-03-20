import * as React from 'react'
import {Provider} from 'react-redux'
import {PlantDashboard} from '../containers'
import configureStore from '../store'

const Dashboard = () => {
  const store = configureStore()

  return (
    <div>
      <Provider store={store}>
        <PlantDashboard/>
      </Provider>
    </div>
  )
}

export default Dashboard
