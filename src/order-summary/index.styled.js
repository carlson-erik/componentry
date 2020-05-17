import styled from 'styled-components';

const H3Title = styled.h3`
  margin: 0;
  font-family: 'Rubik', sans-serif;
`;

const H4Title = styled.h4`
  margin: 0;
  font-family: 'Rubik', sans-serif;
`

const H5Title = styled.h5`
  margin: 0;
  font-family: 'Rubik', sans-serif;
`

const Container = styled.div`
  padding: 0.5rem;
`;

const TextContainer = styled(Container)`
  display:flex;
  flex-direction: column;
  & > * {
    line-height: 1.2;
  }
`;

export {
  H3Title,
  H4Title,
  H5Title,
  Container,
  TextContainer
}