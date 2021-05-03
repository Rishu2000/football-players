import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import TileCard from "../components/TileCard";

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
            <MiniContainer>
      <PlayersContainer>
        <DiscContent>
        <Text>Players</Text>
        <Content>Upper Three are default selected player's tile, you can select any others by draging and droping on upper three.</Content>
        </DiscContent>
        <PlayersTile>
          <DragDropContext>
            <Droppable droppableId="playersID">
              {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>     
            {
              playersInfo.map(({name,club,country}) => {
                return (
                  <EmptyTile>
                  <li>  
                    <TileCard name={name} club={club} country={country}/> 
                  </li>
                  </EmptyTile>
                )
              })
            }
          </ul>
          )}
          </Droppable>
          </DragDropContext>
        </PlayersTile>
      </PlayersContainer>
      </MiniContainer>
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
`

const PlayersContainer = styled.div`
  display:grid;
  grid-template-rows:auto 1fr;
`

const DiscContent = styled.div``

const Text = styled.div`
text-align:center;
font-size:40px;
font-weight:800;
`

const Content = styled.div`
  text-align:center;
`

const PlayersTile = styled.div`
border-top:2px solid gray;
margin:0 80px;
  ul {
      height:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:space-evenly;
      align-content:space-evenly; 
      list-style:none;
  }
`

const EmptyTile = styled.div`
  width:300px;
  height:200px;
  border:1px solid black;
  border-radius:4px;
`