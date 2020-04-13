import { useTheme } from 'styled-components';

import { FlexProps } from '../Core/Flex/interface';
import { PaperProps } from '../Core/Paper/interface';

export class TopBarModels {
  HeaderModel: FlexProps;
  FixedModel: PaperProps;
  NavModel: FlexProps;
  constructor() {
    const { primaryColor } = useTheme() as any;
    this.HeaderModel = {
      as: 'header',
      id: 'aaa',
    };
    this.FixedModel = {
      alignItems: 'center',
      position: 'fixed',
      width: '100%',
      height: '60px',
      backgroundColor: primaryColor,
      // backgroundImage: 'linear-gradient(90deg, #008F11 0%, rgba(0,44,53,0) 50%, #008F11 100%);',
      borderRadius: 'none',
      elevation: 2,
      zIndex: '666',
    };
    this.NavModel = {
      as: 'nav',
      height: '100%',
      width: '100%',
    };
  }
}
