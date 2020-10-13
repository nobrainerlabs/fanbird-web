import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './sso-buttons';

storiesOf('Button', module).add('with text', () => {
  return <Button />;
});