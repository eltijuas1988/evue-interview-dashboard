import React from 'react'
import injectSheet from 'react-jss'
import {Header, Dashboard} from './components'

const App = ({classes}) => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <Header/>
      </div>
      <div className={classes.dashboard}>
        <Dashboard/>
      </div>
    </React.Fragment>
  )
}

const styles = {
  header: {
    paddingTop: 25,
  },
  dashboard: {
    padding: 25,
  },
}

export default injectSheet(styles)(App)
