import React from "react"

const getAttrs = arr => arr.map(m => m)[0]

const Element = ({
  type,
  children,
  actions,
  style,
  customStyles,
  name,
  ...rest
}) => {
  const methods = actions[name] || []
  const userStyle = customStyles[name] || []
  const componentType = type && type.toLowerCase() === "text" ? "span" : "div"
  return React.createElement(
    componentType,
    {
      ...getAttrs(methods),
      ...rest,
      style: {
        ...style,
        ...getAttrs(userStyle)
      }
    },
    children
  )
}

export default Element
