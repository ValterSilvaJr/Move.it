import React from 'react';

import { Wrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}
