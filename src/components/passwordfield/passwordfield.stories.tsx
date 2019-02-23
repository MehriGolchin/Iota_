import React from 'react';
import { storiesOf } from '@storybook/react';
import { PasswordField } from './index';
import { Default } from '../../themes';
import { ThemeProvider } from 'styled-components';

storiesOf('PasswordField', module)
  .add('default', () => (
    <ThemeProvider theme={Default}>
      <PasswordField title="CHOOSE A PASSWORD" />
    </ThemeProvider>
  ));
