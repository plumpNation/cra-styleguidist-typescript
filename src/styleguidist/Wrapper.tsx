import React, { ReactElement } from 'react';
import Wrapper from 'react-styleguidist/lib/client/rsg-components/Wrapper/Wrapper';

interface Props {
  children: ReactElement;
}

function RsgWrapper({ children, ...rest }: Props): ReactElement {
  return (
    <Wrapper {...rest}>
      <h1>I am wrapper</h1>
      {children}
    </Wrapper>
  );
}

export default RsgWrapper;
