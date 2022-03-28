import "styled-components";
import myTheme from "./theme";

export type Theme = typeof myTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
