import React from 'react';

import { Container } from './styles';
import useWrapperScroll from '../useWrapperScroll';

const ModelOverlay: React.FC = ({ children }) => {
  const { scrollY } = useWrapperScroll()

  return (
    <Container>{children}</Container>
  );
};

export default ModelOverlay;
