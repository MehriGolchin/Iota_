import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hello } from './index';

storiesOf('Hello', module)
  .add('default', () => (
    <Hello />
  ));