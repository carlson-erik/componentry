import React from 'react';
import styled from 'styled-components';
import Button from './button';
// --------- Styled Components ---------
const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  & > * {
    margin: 0 1rem 0 1rem;
  }
`;

const SubmitBar = (props) => {
  const {onSubmit, onCancel} = props;
  return(
    <Bar>
      <Button onClick={onSubmit}>Submit</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </Bar>
  )
};

export default SubmitBar;