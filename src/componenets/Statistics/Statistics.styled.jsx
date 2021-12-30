import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 20px #63c4e2;
  overflow: hidden;
`;
export const Title = styled.h2`
  color: #000000;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  background-color: ${getRandomHexColor};
  color: #161616;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777217).toString(16)}`;
}
