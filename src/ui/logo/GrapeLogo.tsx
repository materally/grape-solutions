import { LogoProps } from './model';

import grapeLogo from './svg/grape_logo.svg';

export const GrapeLogo = (props?: LogoProps) => (
  <img alt='Grape Solutions' title='Grape Solutions' {...props} src={grapeLogo} />
);
