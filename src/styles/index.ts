import 'styled-components';
import { Theme } from './themes';

declare module 'styled-components' {
  // noinspection JSUnusedGlobalSymbols
  export interface DefaultTheme extends Theme {}
}
