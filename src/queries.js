import { gql } from "apollo-boost"

export const GET_STUFF = gql`
  {
    file(id: "SRxfBhnvk7zJNs5tSpP8jm") {
      name
      pages {
        name
        id
        type
        frames {
          id
          name
          blendMode
          position {
            x
            y
          }
          size {
            width
            height
          }
          elements {
            name
            type
            characters
            children {
              children {
                name
                position {
                  x
                  y
                }
                size {
                  width
                  height
                }
                style {
                  fontSize
                  fontFamily
                  fontWeight
                  letterSpacing
                }
                strokes {
                  type
                  color {
                    r
                    g
                    b
                    a
                  }
                }
                fill {
                  r
                  g
                  b
                  a
                }
              }
              name
              position {
                x
                y
              }
              size {
                width
                height
              }
              style {
                fontSize
                fontFamily
                fontWeight
                letterSpacing
              }
              strokes {
                type
                color {
                  r
                  g
                  b
                  a
                }
              }
              fill {
                r
                g
                b
                a
              }
            }
            position {
              x
              y
            }
            size {
              width
              height
            }
            style {
              fontSize
              fontFamily
              fontWeight
              letterSpacing
            }
            strokes {
              type
              color {
                r
                g
                b
                a
              }
            }
            fill {
              r
              g
              b
              a
            }
          }
        }
      }
    }
  }
`
