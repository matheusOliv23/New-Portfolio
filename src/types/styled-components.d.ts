import theme from "styles/theme"

type Theme = typeof theme

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
