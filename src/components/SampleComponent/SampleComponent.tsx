import React from 'react';
import { SampleComponentProps } from './SampleComponent.types';
import './SampleComponent.scss';

const SampleComponent: React.FC<SampleComponentProps> = ({ foo }) => (
  <div data-testid="SampleComponent" className="foo-bar">
    {foo}
  </div>
);

export default SampleComponent;
