import React from "react"
import Query from "./query"
import { GET_STUFF } from "./queries"
import Element from "./element"
import Frame from "./Frame"

const All = ({ elements = [] }) =>
  elements.map(element => (
    <Element
      actions={{
        "Quick actions > Primary > Default": [
          {
            onClick: () => alert("JSHEROES SUP ?")
          }
        ]
      }}
      customStyles={{
        "Quick actions > Primary > Default": [
          {
            cursor: "pointer"
          }
        ],
        "Oval 3": [
          {
            borderRadius: "50%",
            border: "none"
          }
        ]
      }}
      {...element}
    >
      {element.characters}
      {element.children
        ? element.children.map(el => <All elements={element.children} />)
        : null}
    </Element>
  ))

// File: https://www.figma.com/file/pgDp5TDS2aSBkUrcUZpbsc/Style-guide
export default () => (
  <Query query={GET_STUFF}>
    {({ file: { pages } }) => {
      return pages[0].frames.map(frame => (
        <Frame {...frame}>{elements => <All elements={elements} />}</Frame>
      ))
    }}
  </Query>
)
