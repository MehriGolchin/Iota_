import React from 'react';
import { storiesOf } from '@storybook/react';
import { PasswordField } from './index';
import { Default } from '../../themes';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

storiesOf('PasswordField', module)
  .add('default', () => (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={Default}>
        <PasswordField title="Choose a password" />
      </ThemeProvider>
    </I18nextProvider>
  ));
