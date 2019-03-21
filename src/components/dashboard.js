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
          <AreaList title="Sorters" type="sorter"/>
          <AreaList title="Washers" type="washer"/>
          <AreaList title="Blanket Folders" type="blanket-folder"/>
          <AreaList title="Ironers" type="ironer"/>
        </Equipment>
      </Provider>
    </div>
  )
}

export default Dashboard
