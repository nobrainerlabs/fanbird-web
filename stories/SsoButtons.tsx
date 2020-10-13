import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/buttons/sso-buttons';

storiesOf('Button', module).add('with text', () => {
  return <Button />;
});