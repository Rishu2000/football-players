import React from "react";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import TileCard from "../components/TileCard";

const noOfEmptyTileCard = 3;

const playersInfo = [
  {
    name:"Rishav1",
    club:"bihar Club",
    country:"India"
  },
  {
    name:"Rishav2",
    club:"bihar Club",
    country:"India"
  },
  {
    name:"Rishav3",
    club:"bihar Club",
    country:"India"
  },
  {
    name:"Rishav4",
    club:"bihar Club",
    country:"India"
  },
  {
    name:"Rishav5",
    club:"bihar Club",
    country:"India"
  },
  {
    name:"Rishav6",
    club:"bihar Club",
    country:"India"
  }
]
const Players = () => {
  return (
    <Container>
      <DragDropContext>
        <Droppable droppableId="dropableID">
          {(provided) => (
            <MiniContainer>
      <PlayersContainer>
        <Text>Players</Text>
        <PlayersTile>
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {
              playersInfo.map(({name,club,country},key) => {
                return (
                  <li key={key}>
                    <TileCard name={name} club={club} country={country}/> 
                  </li>
                )
              })
            }
          </ul>
        </PlayersTile>
      </PlayersContainer>
      <YourContainer>
        <Text>Your Players</Text>
        <YoursTile {...provided.droppableProps} ref={provided.innerRef}>
          {
            [...Array(noOfEmptyTileCard)].map((e,i) => {
            return (
                <EmptyTile>
                </EmptyTile>
              )
          })
          }
        </YoursTile>
      </YourContainer>
      </MiniContainer>
      )}
      </Droppable>
      </DragDropContext>
    </Container>
  )
};

export default Players;

const Container = styled.div`
  height:100vh;
`

const MiniContainer = styled.span`
  height:100%;
  display:flex;
  display:grid;
  grid-template-columns:2fr 1fr;
`

const PlayersContainer = styled.div`
  display:grid;
  grid-template-rows:60px 1fr;
`

const YourContainer = styled.div`
  border-left:2px solid grey;
  display:grid;
  grid-template-rows:60px 1fr;
`

const Text = styled.div`
text-align:center;
font-size:40px;
font-weight:800;
`

const PlayersTile = styled.div`
border-top:2px solid gray;
  ul {
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-evenly;
      align-content:space-evenly; 
      list-style:none;
  }
`

const YoursTile = styled.div`
height:100%;
border-top:2px solid gray;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
`

const EmptyTile = styled.div`
  width:250px;
  height:150px;
  border:1px solid black;
  border-radius:4px;
`