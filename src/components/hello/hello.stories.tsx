import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hello } from './index';

storiesOf('Button', module)
  .add('default', () => (
    <Hello />
  ));