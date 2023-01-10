import React from "react"
const RGBA = ({ r, g, b, a }) => `rgba(${r * 255},${g * 255},${b * 255},${a})`

const createBG = ({ r, g, b, a }, type) =>
  type === "TEXT" ? null : RGBA({ r, g, b, a })

const createColor = ({ r, g, b, a }, type) =>
  type !== "TEXT" ? null : RGBA({ r, g, b, a })

const createBorder = ({ type, color: { r, g, b, a } }) =>
  `1px ${type.toLowerCase()} ${RGBA({ r, g, b, a })}`

export default ({ children, elements, position, style, size, ...props }) => {
  const newElements = (elements, position) =>
    elements.map(element => ({
      ...element,
      children: element.children
        ? newElements(element.children, element.position)
        : null,
      style: {
        position: "absolute",
        background: element.fill
          ? createBG(element.fill, element.type)
          : "transparent",
        color: element.fill
          ? createColor(element.fill, element.type)
          : "transparent",
        width: element.size.width,
        height: element.size.height,
        border:
          element.strokes && element.strokes[0]
            ? createBorder(element.strokes[0])
            : null,
        left: element.position.x - position.x,
        top: element.position.y - position.y,
        ...element.style
      }
    }))

  return (
    <div
      style={{
        position: "relative",
        height: size.height,
        width: size.width,
        ...style
      }}
      {...props}
    >
      {children(newElements(elements, position))}
    </div>
  )
}
