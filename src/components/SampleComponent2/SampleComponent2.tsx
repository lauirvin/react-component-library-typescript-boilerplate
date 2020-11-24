import React from 'react';
import { SampleComponent2Props } from './SampleComponent2.types';
import './SampleComponent2.scss';

export const SampleComponent2: React.FC<SampleComponent2Props> = ({ foo }) => (
  <div data-testid="SampleComponent2" className="foo-bar">
    {foo}
    asdfasdf
  </div>
);

export default SampleComponent2;
