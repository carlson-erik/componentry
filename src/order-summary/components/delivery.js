import React from 'react';
import styled from 'styled-components';
import {H4Title, H5Title, Container, TextContainer} from '../index.styled';

const Label = styled(H5Title)`
  padding-right: 0.25rem;
`;

const Section = styled.div`
  padding-bottom: 0.5rem;
`;

const MiddleSection = styled(Section)`
  padding: 0 0.5rem 0.5rem 0.5rem;
`;

const TextLine = styled.span`
  font-size: 14px;
  display: flex;
`;

const InfoContainer = styled(Container)`
  display: flex;
  width: 95%;
  border-radius: 0.25rem;
`;

const DeliveryInfo = (props) => {
  const {name, address, contact} = props;
  const {first, last} = name;
  const { street, town, state, country, zip } = address;
  const {email, phone} = contact;
  return (
    <InfoContainer>
      <Section>
        <H4Title>Contact Information</H4Title>
        <TextContainer>
          <TextLine>{first} {last}</TextLine>
          <TextLine>{email}</TextLine>
          <TextLine>{phone}</TextLine>
        </TextContainer>
      </Section>
      <MiddleSection>
        <H4Title>Address</H4Title>
        <TextContainer>
          <TextLine>{street}</TextLine>
          <TextLine>{town}, {state}, {country} {zip}</TextLine>
        </TextContainer>
      </MiddleSection>
      <Section>
        <H4Title>Payment Details</H4Title>
        <TextContainer >
          <TextLine>
            <Label>Credit Card:</Label>
            *****3921
          </TextLine>
          <TextLine>
            <Label>Expiration:</Label>
            11/20
          </TextLine>
        </TextContainer>
      </Section>
    </InfoContainer>
  );
};

export default DeliveryInfo;