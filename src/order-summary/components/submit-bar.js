import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faQuestion, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// --------- Data ---------
import {statuses} from '../data';
// --------- Styled Components ---------
const Bar = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitBar = (props) => {
  const {onSubmit, onCancel} = props;
  return(
    <Bar>
      <div>submit</div>
      <div>cancel</div>
    </Bar>
  )
};

export default SubmitBar;