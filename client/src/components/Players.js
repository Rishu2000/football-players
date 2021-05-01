import React from "react";
import styled from "styled-components";
import TileCard from "../components/TileCard";

const Players = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <Text>Players</Text>
            <Container>
              <TileContainer>
                <YourContainer>
                <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
                </YourContainer>
              </TileContainer>
              <TileContainer>
                <YourContainer>
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              </YourContainer>
              </TileContainer>
              <TileContainer>
                <YourContainer>
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              </YourContainer>
              </TileContainer>
              <TileContainer>
              <YourContainer>
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              </YourContainer>
              </TileContainer>
              <TileContainer>
              <YourContainer>
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              </YourContainer>
              </TileContainer>
              <TileContainer>
              <YourContainer>
              <TileCard
                name="Rishav Kumar Shah"
                club="Bihar shafwewggeeg"
                country="China"
              />
              </YourContainer>
              </TileContainer>
            </Container>
          </div>
          <div className="col-3">
            <Text>Your Players</Text>
            <SideContainer>
              <YourContainer/>
              <YourContainer/>
              <YourContainer/>
            </SideContainer>
          </div>
        </div>
      </div>
  );
};

export default Players;

const Text = styled.div`
  font-weight: 800;
  font-size: 40px;
  text-align: center;
`

const Container = styled.div`
  height: 570px;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 50% 50%;
  border-right:2px solid gray;
`;

const TileContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

const SideContainer = styled.div`
height:100%;
  display:grid;
  grid-template-columns:100%;
  grid-template-rows:33.3% 33.3% 33.33.%;
`

const YourContainer = styled.div`
  height:150px;
  width:250;
  border: 2px solid black;
  border-radius: 4px;
`