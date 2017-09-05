import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const IconCheckbox = ({
  label,
  name,
  checked,
  handleCheck,
  style,
  inputStyle,
  clickHandler,
  src,
  alt
}) => {
  return (
    <div>
      <Checkbox
        label={label}
        name={label}
        checked={checked}
        onCheck={handleCheck}
        style={style}
        inputStyle={inputStyle}
      />
      {src && (
        <img
          onClick={clickHandler}
          style={{
            position: 'relative',
            top: -40,
            right: -200,
            zIndex: 2
          }}
          src={src}
          alt={alt}
        />
      )}
    </div>
  )
}

export default IconCheckbox
