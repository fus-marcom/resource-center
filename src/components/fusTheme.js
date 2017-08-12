/**
 * More info here: http://www.material-ui.com/#/customization/themes
**/

import {
  cyan500,
  cyan700,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from 'material-ui/styles/colors'

/* When needed add { darken, emphasize, lighten } to the next import */

import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
/* import 'typography' from 'material-ui/styles/typography' */

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#21412a',
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
  /*
  * What style you can edit to components from theme...
  * Source: https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js

  appBar: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      height: spacing.desktopKeylineIncrement,
      titleFontWeight: typography.fontWeightNormal,
      padding: spacing.desktopGutter,
    },
    avatar: {
      color: palette.canvasColor,
      backgroundColor: emphasize(palette.canvasColor, 0.26),
    },
    badge: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.primary1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryTextColor: palette.alternateTextColor,
      fontWeight: typography.fontWeightMedium,
    },
    bottomNavigation: {
      backgroundColor: palette.canvasColor,
      unselectedColor: fade(palette.textColor, 0.54),
      selectedColor: palette.primary1Color,
      height: 56,
      unselectedFontSize: 12,
      selectedFontSize: 14,
    },
    button: {
      height: 36,
      minWidth: 88,
      iconButtonSize: spacing.iconSize * 2,
    },
    card: {
      titleColor: fade(palette.textColor, 0.87),
      subtitleColor: fade(palette.textColor, 0.54),
      fontWeight: typography.fontWeightMedium,
    },
    cardMedia: {
      color: darkWhite,
      overlayContentBackground: lightBlack,
      titleColor: darkWhite,
      subtitleColor: lightWhite,
    },
    cardText: {
      textColor: palette.textColor,
    },
    checkbox: {
      boxColor: palette.textColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
    },
    chip: {
      backgroundColor: emphasize(palette.canvasColor, 0.12),
      deleteIconColor: fade(palette.textColor, 0.26),
      textColor: fade(palette.textColor, 0.87),
      fontSize: 14,
      fontWeight: typography.fontWeightNormal,
      shadow: `0 1px 6px ${fade(palette.shadowColor, 0.12)},
        0 1px 4px ${fade(palette.shadowColor, 0.12)}`,
    },
    datePicker: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      calendarTextColor: palette.textColor,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor,
      calendarYearBackgroundColor: palette.canvasColor,
      headerColor: palette.pickerHeaderColor || palette.primary1Color,
    },
    dialog: {
      titleFontSize: 22,
      bodyFontSize: 16,
      bodyColor: fade(palette.textColor, 0.6),
    },
    dropDownMenu: {
      accentColor: palette.borderColor,
    },
    enhancedButton: {
      tapHighlightColor: transparent,
    },
    flatButton: {
      color: transparent,
      buttonFilterColor: '#999999',
      disabledTextColor: fade(palette.textColor, 0.3),
      textColor: palette.textColor,
      primaryTextColor: palette.primary1Color,
      secondaryTextColor: palette.accent1Color,
      fontSize: typography.fontStyleButtonFontSize,
      fontWeight: typography.fontWeightMedium,
    },
    floatingActionButton: {
      buttonSize: 56,
      miniSize: 40,
      color: palette.primary1Color,
      iconColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryIconColor: palette.alternateTextColor,
      disabledTextColor: palette.disabledColor,
      disabledColor: emphasize(palette.canvasColor, 0.12),
    },
    gridTile: {
      textColor: white,
    },
    icon: {
      color: palette.canvasColor,
      backgroundColor: palette.primary1Color,
    },
    inkBar: {
      backgroundColor: palette.accent1Color,
    },
    drawer: {
      width: spacing.desktopKeylineIncrement * 4,
      color: palette.canvasColor,
    },
    listItem: {
      nestedLevelDepth: 18,
      secondaryTextColor: palette.secondaryTextColor,
      leftIconColor: grey600,
      rightIconColor: grey600,
    },
    menu: {
      backgroundColor: palette.canvasColor,
      containerBackgroundColor: palette.canvasColor,
    },
    menuItem: {
      dataHeight: 32,
      height: 48,
      hoverColor: fade(palette.textColor, 0.1),
      padding: spacing.desktopGutter,
      selectedTextColor: palette.accent1Color,
      rightIconDesktopFill: grey600,
    },
    menuSubheader: {
      padding: spacing.desktopGutter,
      borderColor: palette.borderColor,
      textColor: palette.primary1Color,
    },
    overlay: {
      backgroundColor: lightBlack,
    },
    paper: {
      color: palette.textColor,
      backgroundColor: palette.canvasColor,
      zDepthShadows: [
        [1, 6, 0.12, 1, 4, 0.12],
        [3, 10, 0.16, 3, 10, 0.23],
        [10, 30, 0.19, 6, 10, 0.23],
        [14, 45, 0.25, 10, 18, 0.22],
        [19, 60, 0.30, 15, 20, 0.22],
      ].map((d) => (
        `0 ${d[0]}px ${d[1]}px ${fade(palette.shadowColor, d[2])},
         0 ${d[3]}px ${d[4]}px ${fade(palette.shadowColor, d[5])}`
      )),
    },
    radioButton: {
      borderColor: palette.textColor,
      backgroundColor: palette.alternateTextColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      size: 24,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
    },
    raisedButton: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.primary1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryTextColor: palette.alternateTextColor,
      disabledColor: darken(palette.alternateTextColor, 0.1),
      disabledTextColor: fade(palette.textColor, 0.3),
      fontSize: typography.fontStyleButtonFontSize,
      fontWeight: typography.fontWeightMedium,
    },
    refreshIndicator: {
      strokeColor: palette.borderColor,
      loadingStrokeColor: palette.primary1Color,
    },
    ripple: {
      color: fade(palette.textColor, 0.87),
    },
    slider: {
      trackSize: 2,
      trackColor: palette.primary3Color,
      trackColorSelected: palette.accent3Color,
      handleSize: 12,
      handleSizeDisabled: 8,
      handleSizeActive: 18,
      handleColorZero: palette.primary3Color,
      handleFillColor: palette.alternateTextColor,
      selectionColor: palette.primary1Color,
      rippleColor: palette.primary1Color,
    },
    snackbar: {
      textColor: palette.alternateTextColor,
      backgroundColor: palette.textColor,
      actionColor: palette.accent1Color,
    },
    subheader: {
      color: fade(palette.textColor, 0.54),
      fontWeight: typography.fontWeightMedium,
    },
    stepper: {
      backgroundColor: 'transparent',
      hoverBackgroundColor: fade(black, 0.06),
      iconColor: palette.primary1Color,
      hoveredIconColor: grey700,
      inactiveIconColor: grey500,
      textColor: fade(black, 0.87),
      disabledTextColor: fade(black, 0.26),
      connectorLineColor: grey400,
    },
    svgIcon: {
      color: palette.textColor,
    },
    table: {
      backgroundColor: palette.canvasColor,
    },
    tableFooter: {
      borderColor: palette.borderColor,
      textColor: palette.accent3Color,
    },
    tableHeader: {
      borderColor: palette.borderColor,
    },
    tableHeaderColumn: {
      textColor: palette.accent3Color,
      height: 56,
      spacing: 24,
    },
    tableRow: {
      hoverColor: palette.accent2Color,
      stripeColor: fade(lighten(palette.primary1Color, 0.5), 0.4),
      selectedColor: palette.borderColor,
      textColor: palette.textColor,
      borderColor: palette.borderColor,
      height: 48,
    },
    tableRowColumn: {
      height: 48,
      spacing: 24,
    },
    tabs: {
      backgroundColor: palette.primary1Color,
      textColor: fade(palette.alternateTextColor, 0.7),
      selectedTextColor: palette.alternateTextColor,
    },
    textField: {
      textColor: palette.textColor,
      hintColor: palette.disabledColor,
      floatingLabelColor: palette.disabledColor,
      disabledTextColor: palette.disabledColor,
      errorColor: red500,
      focusColor: palette.primary1Color,
      backgroundColor: 'transparent',
      borderColor: palette.borderColor,
    },
    timePicker: {
      color: palette.alternateTextColor,
      textColor: palette.alternateTextColor,
      accentColor: palette.primary1Color,
      clockColor: palette.textColor,
      clockCircleColor: palette.clockCircleColor,
      headerColor: palette.pickerHeaderColor || palette.primary1Color,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor,
    },
    toggle: {
      thumbOnColor: palette.primary1Color,
      thumbOffColor: palette.accent2Color,
      thumbDisabledColor: palette.borderColor,
      thumbRequiredColor: palette.primary1Color,
      trackOnColor: fade(palette.primary1Color, 0.5),
      trackOffColor: palette.primary3Color,
      trackDisabledColor: palette.primary3Color,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
      trackRequiredColor: fade(palette.primary1Color, 0.5),
    },
    toolbar: {
      color: fade(palette.textColor, 0.54),
      hoverColor: fade(palette.textColor, 0.87),
      backgroundColor: darken(palette.accent2Color, 0.05),
      height: 56,
      titleFontSize: 20,
      iconColor: fade(palette.textColor, 0.4),
      separatorColor: fade(palette.textColor, 0.175),
      menuHoverColor: fade(palette.textColor, 0.1),
    },
    tooltip: {
      color: white,
      rippleBackgroundColor: grey700,
    }
  */
}
