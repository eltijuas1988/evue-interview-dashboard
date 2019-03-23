import * as React from 'react'
import {Equipment} from '../containers'
import {AreaList} from '.'

const Dashboard = () => {
  return (
    <Equipment>
      <AreaList title="Sorters" type="sorter"/>
      <AreaList title="Washers" type="washer"/>
      <AreaList title="Blanket Folders" type="blanket-folder"/>
      <AreaList title="Ironers" type="ironer"/>
    </Equipment>
  )
}

export default Dashboard
