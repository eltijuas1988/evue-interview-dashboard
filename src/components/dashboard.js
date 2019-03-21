import * as React from 'react'
import {Provider} from 'react-redux'
import {Equipment} from '../containers'
import configureStore from '../store'

const Dashboard = () => {
  const store = configureStore()

  return (
    <div>
      <Provider store={store}>
        <Equipment/>
      </Provider>
    </div>
  )
}

export default Dashboard
