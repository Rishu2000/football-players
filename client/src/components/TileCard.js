import React from "react";
import styled from "styled-components";

const TileCard = ({ name, club, country }) => {
  return (
    <Container>
      <MiniContainer>
        {name} <br /> {club} <br />
        {country}
      </MiniContainer>
    </Container>
  );
};

export default TileCard;

const Container = styled.div`
  width: 250px;
  height: 150px;
  /* border: 2px solid black; */
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background: url(https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2020/11/17/Desktop_2021_UK_L1_Nice_OM_collage.jpg);
  background-repeat: no-repeat;
  background-size: 250px 150px;
`;

const MiniContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  color: white;
`;
