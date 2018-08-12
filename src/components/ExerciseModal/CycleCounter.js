import React from 'react';
import styled from 'styled-components';
import {
  CardActions,
  CardContent,
  Button,
  InputAdornment,
  TextField,
  Typography
} from '@material-ui/core';

const StyledCardActions = styled(CardActions)`
  justify-content: space-around;
`;

const CyclesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const ProgressOfCycles = styled(Typography)`
  padding: 0 1rem;
`;

export default ({
  lockedCycles,
  handleLockedCycles,
  resetCycles,
  changeCycle,
  numberOfCycles,
  completedCycles,
  removeCycleDone,
  addCycleDone
}) => {
  return (
    <React.Fragment>
      <CardContent>
        <TextField
          id="simple-start-adornment"
          disabled={lockedCycles}
          onChange={changeCycle}
          value={numberOfCycles === 0 ? '' : numberOfCycles}
          InputProps={{
            type: 'number',
            startAdornment: (
              <InputAdornment position="start">Cycles</InputAdornment>
            )
          }}
        />
        <CyclesContainer>
          <Button onClick={removeCycleDone}>-</Button>
          <ProgressOfCycles component="p">
            Cycle: {completedCycles} of {numberOfCycles}
          </ProgressOfCycles>
          <Button onClick={addCycleDone}>+</Button>
        </CyclesContainer>
      </CardContent>
      <StyledCardActions>
        {lockedCycles ? (
          <Button
            size="small"
            color="primary"
            onClick={handleLockedCycles(false)}
          >
            Unlock Cycle
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={handleLockedCycles(true)}
          >
            Lock Cycle
          </Button>
        )}

        <Button size="small" color="secondary" onClick={resetCycles}>
          Reset
        </Button>
      </StyledCardActions>
    </React.Fragment>
  );
};
