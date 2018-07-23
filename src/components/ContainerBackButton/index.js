import React from 'react';
import styled from 'styled-components';
import BackButton from '../BackButtonWide';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PhotosContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export default ({ children }) => {
  return (
    <Container>
      <PhotosContainer>{children}</PhotosContainer>
      <BackButton />
    </Container>
  );
};
