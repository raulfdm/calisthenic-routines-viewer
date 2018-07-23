import React, { Component } from 'react';
import styled from 'styled-components';
import { Typography, Button, Modal } from '@material-ui/core';

import ContainerBackButton from '../ContainerBackButton';
import Photo from '../Photo';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
        <StyledModal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Photo url={this.state.currentImg} alt={this.state.alt} />
        </StyledModal>
      </React.Fragment>
    );
  }
}
