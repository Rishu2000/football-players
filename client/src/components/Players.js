import React from "react";
import styled from "styled-components";
import TileCard from "../components/TileCard";

const Players = () => {
  return (
    <BigContainer>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <Container>
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
            </Container>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </BigContainer>
  );
};

export default Players;

const BigContainer = styled.div`
  height: 100%;
`;

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 50% 50%;
`;
