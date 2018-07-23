import React from 'react';
import styled from 'styled-components';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  flex-wrap: wrap;
`;

const ContainerLink = styled(ButtonBase)`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &&& {
    background-color: ${props => {
      const { childNum } = props;
      switch (childNum) {
        case 1:
          return '#a55eea';
        case 2:
          return '#2bcbba';
        case 3:
          return '#fd9644';
        case 4:
          return '#eb3b5a';
      }
    }};
  }
`;

const SquareTitle = styled(Typography)`
  &&& {
    text-decoration: none;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export default props => {
  const GoTo = path => () => {
    const { push } = props.history;
    push(`/routine/${path}`);
  };

  return (
    <Container>
      <ContainerLink childNum={1} onClick={GoTo('warmup')}>
        <SquareTitle>WarmUp</SquareTitle>
      </ContainerLink>
      <ContainerLink childNum={2} onClick={GoTo('beginner')}>
        <SquareTitle>Beginner</SquareTitle>
      </ContainerLink>
      <ContainerLink childNum={3} onClick={GoTo('medior')}>
        <SquareTitle>Medior</SquareTitle>
      </ContainerLink>
      <ContainerLink childNum={4} onClick={GoTo('advanced')}>
        <SquareTitle>Advanced</SquareTitle>
      </ContainerLink>
    </Container>
  );
};
