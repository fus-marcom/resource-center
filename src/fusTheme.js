/**
 * More info here: https://material-ui-1dab0.firebaseapp.com/customization/themes
 */
import { createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'

const fusTheme = createMuiTheme({
  palette: createPalette({
    type: 'dark'
  })
})

export default fusTheme
