import React from 'react';
import styled from 'styled-components';

const PhotoContainer = styled.div`
  padding: 0 1rem;
  &:focus {
    outline: none;
  }
`;

const Photo = styled.img`
  width: 100%;
`;

export default ({ alt, url }) => {
  return (
    <PhotoContainer>
      <Photo src={url} alt={alt} />
    </PhotoContainer>
  );
};
