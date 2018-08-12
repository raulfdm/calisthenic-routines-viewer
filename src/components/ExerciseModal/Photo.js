import React from 'react';
import styled from 'styled-components';
import { CardMedia } from '@material-ui/core';

const Photo = styled(CardMedia)`
  width: 100%;
`;

export default ({ title, image }) => {
  return <Photo image={image} title={title} component="img" />;
};
