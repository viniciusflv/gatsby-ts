import styled from 'styled-components';

export const WrapperStyle = styled.div`
  display: flex;
  flex-grow: 2;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
`;
