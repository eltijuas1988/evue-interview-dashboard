import React from 'react'
import injectSheet from 'react-jss'
import {Header, Dashboard} from './components'
import {DARK_PURPLE} from './constants'

const App = ({classes}) => {
  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.dashboard}>
        <Dashboard/>
      </div>
    </div>
  )
}

const styles = {
  root: {
    backgroundColor: DARK_PURPLE,
  },
  dashboard: {
    padding: 25,
  },
}

export default injectSheet(styles)(App)
