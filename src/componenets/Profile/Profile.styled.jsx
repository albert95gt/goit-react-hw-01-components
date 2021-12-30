import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;

  margin-right: auto;
  margin-left: auto;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 20px #63c4e2;
  overflow: hidden;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  margin-top: 20px;
  width: 300px;
  height: 300px;
  background-color: #b2e8ec;
  border-radius: 200px;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  font-size: 16px;
  color: gray;
`;

export const UserLocation = styled.p`
  font-style: 20px;
  color: gray;
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  background-color: #f7f1f1;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 10px;
  border-top: solid #c9c5c5 1px;
  :not(:last-child) {
    border-right: solid #c9c5c5 1px;
  }
`;
export const Label = styled.span`
  font-size: 16px;
  color: gray;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
