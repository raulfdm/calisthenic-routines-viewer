import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const CustomButton = styled(Button)`
  &&& {
    border-radius: 0;
  }
`;

const BackButtonWide = props => {
  const goHome = () => props.history.push('/');
  return (
    <CustomButton variant="contained" color="primary" onClick={goHome}>
      BACK
    </CustomButton>
  );
};

export default withRouter(BackButtonWide);
