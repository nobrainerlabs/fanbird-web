import { storiesOf } from '@storybook/react';
import Feature from './feature1';

storiesOf('Feature', module).add('with text', () => {
  return <Feature />;
});