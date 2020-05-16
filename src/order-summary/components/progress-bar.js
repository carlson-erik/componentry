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

const Item = styled.div`
  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  color: #969696;
  & > svg {
    height: 1.25rem;
    width: 1.25rem !important;
  }
`;

const CompletedItem = styled(Item)`
  color: #42bb42;
`;

const ActiveItem = styled(Item)`
  color: blue;
  border: 1px blue solid;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  margin: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: 4px;
`;

const Name = styled.span`
  padding-top: 0.25rem;
  font-weight: bold;
`;

// --------- Components ---------
const ProgressionItem = (props) => {
  const {status, name} = props;
  switch(status){
    case statuses.ACTIVE:
      return (
        <ActiveItem>
          <FontAwesomeIcon icon={faArrowRight} />
          <Name>{name}</Name>
        </ActiveItem>
      );
    case statuses.COMPLETE: 
      return (
        <CompletedItem>
          <FontAwesomeIcon icon={faCheck} />
          <Name>{name}</Name>
        </CompletedItem>
      );
    default: 
      return (
        <Item>
          <FontAwesomeIcon icon={faQuestion} />
          <Name>{name}</Name>
        </Item>
      );
  }
};

const ProgressionBar = ({items}) => {
  return(
    <Bar>
      {items.map(item => <ProgressionItem key={item.name.toLowerCase()} {...item}/>)}
    </Bar>
  )
};

export default ProgressionBar;