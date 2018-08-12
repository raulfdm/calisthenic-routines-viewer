import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, Card } from '@material-ui/core';
import Photo from './Photo';
import CycleCounter from './CycleCounter';

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

class ExerciseModal extends Component {
  state = {
    lockedCycles: false,
    numberOfCycles: 0,
    completedCycles: 0
  };

  changeCycle = event =>
    this.setState({
      numberOfCycles: event.target.value
    });

  handleLockedCycles = nextState => () => {
    const message = `Are you sure you want ${
      nextState ? 'lock' : 'unlock'
    } number of cycles?`;
    const shouldLockCycles = window.confirm(message);

    if (shouldLockCycles) {
      this.setState({
        lockedCycles: nextState
      });
    }
  };

  addCycleDone = () => {
    const nextValue = this.state.completedCycles + 1;
    const { numberOfCycles, lockedCycles } = this.state;

    /*
      should only change if nextValue is lower than the number of cycles
      and it's locked 
    */

    if (nextValue <= numberOfCycles && lockedCycles) {
      this.setState({
        completedCycles: nextValue
      });
    }
  };

  removeCycleDone = () => {
    const nextValue = this.state.completedCycles - 1;
    const { lockedCycles } = this.state;

    /*
      should only change if nextValue is higher than 0
      and it's locked 
    */
    if (nextValue >= 0 && lockedCycles) {
      this.setState({
        completedCycles: nextValue
      });
    }
  };

  cleanState = () =>
    this.setState({
      lockedCycles: false,
      numberOfCycles: 0,
      completedCycles: 0
    });

  resetCycles = () => {
    const { numberOfCycles } = this.state;
    if (numberOfCycles !== 0) {
      const shouldReset = window.confirm(
        'Are you sure you want to reset cycle counter?'
      );

      if (shouldReset) {
        this.cleanState();
      }
    }
  };

  render() {
    const {
      open,
      handleClose,
      currentImg,
      alt,
      shouldRenderCycle
    } = this.props;

    return (
      <StyledModal open={open} onClose={handleClose}>
        <Card>
          <Photo image={currentImg} title={alt} />
          {shouldRenderCycle && (
            <CycleCounter
              changeCycle={this.changeCycle}
              lockedCycles={this.state.lockedCycles}
              handleLockedCycles={this.handleLockedCycles}
              resetCycles={this.resetCycles}
              addCycleDone={this.addCycleDone}
              removeCycleDone={this.removeCycleDone}
              completedCycles={this.state.completedCycles}
              numberOfCycles={this.state.numberOfCycles}
            />
          )}
        </Card>
      </StyledModal>
    );
  }
}

export default ExerciseModal;
