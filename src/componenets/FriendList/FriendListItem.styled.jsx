import styled from 'styled-components';

export const Status = styled.span`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
  border-radius: 200px;
`;

export const FriendsName = styled.p`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
`;
