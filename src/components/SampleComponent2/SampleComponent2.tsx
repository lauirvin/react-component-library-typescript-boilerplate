import React from 'react';
import { SampleComponent2Props } from './SampleComponent2.types';
import './SampleComponent2.scss';

const SampleComponent2: React.FC<SampleComponent2Props> = ({ foo }) => (
  <div data-testid="SampleComponent2" className="foo-bar">
    {foo}
  </div>
);

export default SampleComponent2;
