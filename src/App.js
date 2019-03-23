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
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    code: {
      fontFamily: [
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Courier New',
        'monospace',
      ],
    }
  },
}

export default injectSheet(styles)(App)
