import 'styled-components';
import { GeoTheme } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends GeoTheme {}
}
