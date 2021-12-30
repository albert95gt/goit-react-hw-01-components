import styled from 'styled-components';

export const FriendsList = styled.ul`
  list-style: none;
  padding: 10px 0 10px 0;
  margin: 20px auto 0 auto;

  width: 600px;
  border-radius: 10px;
`;

export const FriendItem = styled.li`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;

  width: 400px;
  padding: 10px;

  background-color: #ffffff;

  box-shadow: 2px 2px 20px #63c4e2;

  border-radius: 10px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
