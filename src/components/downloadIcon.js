import React from 'react'
import SvgIcon from 'material-ui/SvgIcon'

const DownloadIcon = ({ color }) => {
  return (
    <SvgIcon color={color}>
      <path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' />
      <path d='M0 0h24v24H0z' fill='none' />
    </SvgIcon>
  )
}

export default DownloadIcon
