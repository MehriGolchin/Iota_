import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './index';
import { ThemeProvider } from 'styled-components';
import { Default } from '../../themes';

storiesOf('TextField', module)
  .add('default', () => (
    <ThemeProvider theme={Default}>
      <TextField title="Label" />
    </ThemeProvider>
  ));
  