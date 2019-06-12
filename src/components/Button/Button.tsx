import React, {ReactNode} from 'react';

interface Props {
  /** Here is a description about the `onClick` prop */
  color: string;
  children: ReactNode;
}

export default ({children, color}: Props) =>
  <button style={{color}}>{children}</button>
