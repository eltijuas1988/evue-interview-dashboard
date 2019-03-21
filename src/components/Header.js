import * as React from 'react'
import injectSheet from 'react-jss'
import logo from '../logo.png'
import {FLAT_GREEN} from '../constants'

const Header = ({classes}) => {
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt="logo"/>
    </div>
  )
}

const styles = {
  root: {
    backgroundColor: FLAT_GREEN,
    padding: [15, 25, 15, 25],
  },
  logo: {
    width: 250,
  },
}

export default injectSheet(styles)(Header)
