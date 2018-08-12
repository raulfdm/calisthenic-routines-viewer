import React, { Component } from 'react';
import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';

import ContainerBackButton from '../ContainerBackButton';
import ExerciseModal from '../ExerciseModal';

const RoutineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export default class Main extends Component {
  state = {
    open: false,
    currentImg: '',
    alt: ''
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  changeImage = routine => () => {
    this.setState({
      open: true,
      currentImg: routine.img,
      alt: routine.name
    });
  };

  render() {
    const { routine } = this.props;

    return (
      <React.Fragment>
        <ContainerBackButton>
          <Typography variant="display1">{routine.title}</Typography>
          <RoutineContainer>
            {routine.exercises.map(routine => {
              return (
                <StyledButton
                  key={routine.id}
                  onClick={this.changeImage(routine)}
                >
                  {routine.name}
                </StyledButton>
              );
            })}
          </RoutineContainer>
        </ContainerBackButton>
        <ExerciseModal
          open={this.state.open}
          alt={this.state.alt}
          currentImg={this.state.currentImg}
          handleClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}
