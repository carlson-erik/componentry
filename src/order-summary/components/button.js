import React from 'react';
import styled from 'styled-components';

const ResetButton = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  /* show a hand cursor on hover; some argue that we
  should keep the default arrow cursor for buttons */
  cursor: pointer;
`;

const StyledButton = styled(ResetButton)`
  display: inline-block;
  text-align: center;
  text-decoration: none;

  /* create a small space when buttons wrap on 2 lines */
  margin: 2px 0;

  /* invisible border (will be colored on hover/focus) */
  border: solid 1px transparent;
  border-radius: 4px;

  /* button size comes from text + padding, avoid height */
  padding: 0.5em 1em;

  /* make sure colors have enough contrast! */
  color: #FFFFFF;
  background-color: ${props => props.bgcolor || '#9555AF'};
  
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  &:hover {
    color: ${props => props.textColor || '#9050AA'};
    border-color: currentColor;
    background-color: white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.shadowColor || 'rgba(255, 105, 180, 0.5)'},
      0 0 0 1.5px ${props => props.shadowColor || 'rgba(255, 105, 180, 0.5)'};
  }
`;

const Button = (props) => {
  const {children, onClick, active} = props;
  const bgcolor = active ? 'blue' : '#969696';
  const textColor = active ? 'blue' : '#969696';
  const shadowColor = active ? 'rgba(0, 0, 255, 0.5)' : 'rgb(150, 150, 150, 0.5)';
  return (
    <StyledButton 
      bgcolor={bgcolor} 
      textColor={textColor}
      shadowColor={shadowColor} 
      onClick={onClick}>
      {children}
    </StyledButton>
  )
};

export default Button;