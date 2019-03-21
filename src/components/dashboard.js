import * as React from 'react'
import {Provider} from 'react-redux'
import {Equipment} from '../containers'
import configureStore from '../store'
import {AreaList} from '.'

const Dashboard = () => {
  const store = configureStore()

  return (
    <div>
      <Provider store={store}>
        <Equipment>
          <AreaList/>
        </Equipment>
      </Provider>
    </div>
  )
}

export default Dashboard
