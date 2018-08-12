import React from 'react';
import styled from 'styled-components';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import warmUpBackgroundImg from '../../images/background/warmup.png';
import beginnerBackgroundImg from '../../images/background/beginner.png';
import intermediateBackgroundImg from '../../images/background/intermediate.png';
import advancedBackgroundImg from '../../images/background/advanced.png';

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
    background-image: ${props => {
      const { childNum } = props;
      switch (childNum) {
        case 1:
          return `url(${warmUpBackgroundImg})`;
        case 2:
          return `url(${beginnerBackgroundImg})`;
        case 3:
          return `url(${intermediateBackgroundImg})`;
        case 4:
          return `url(${advancedBackgroundImg})`;
      }
    }};
    background-size: cover;
    background-position: bottom;
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
        <SquareTitle>Warm up</SquareTitle>
      </ContainerLink>
      <ContainerLink childNum={2} onClick={GoTo('beginner')}>
        <SquareTitle>Beginner</SquareTitle>
      </ContainerLink>
      <ContainerLink childNum={3} onClick={GoTo('intermediate')}>
        <SquareTitle>Intermediate</SquareTitle>
      </ContainerLink>
      <ContainerLink childNum={4} onClick={GoTo('advanced')}>
        <SquareTitle>Advanced</SquareTitle>
      </ContainerLink>
    </Container>
  );
};
