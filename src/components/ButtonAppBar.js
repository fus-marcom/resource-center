import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    marginTop: 0,
    width: '100%'
  },
  flex: {
    flex: 1
  }
})

const ButtonAppBar = props => {
  const classes = props.classes
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton color='contrast' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography type='title' color='inherit' className={classes.flex}>
            Title
          </Typography>
          <Button color='contrast'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styleSheet)(ButtonAppBar)
