import React, { useState } from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";
import TileCard from "../components/TileCard";

const playersInfo = [
  {
    name:"Lionel Messi",
    club:"Barcelona",
    country:"Argentina"
  },
  {
    name:"Cristiano Ronaldo",
    club:"Real Madrid",
    country:"Portugal"
  },
  {
    name:"Xavi",
    club:"Barcelona",
    country:"Spain"
  },
  {
    name:"Andres Iniesta",
    club:"Barcelona",
    country:"Spain"
  },
  {
    name:"Zlatan Ibrahimovic",
    club:"PSG",
    country:"Sweden"
  },
  {
    name:"Radamel Falcao",
    club:"Atletico Madrid",
    country:"Colombia"
  }
]
const Players = () => {
  const [characters,setCharacters] = useState(playersInfo)
  function handleOnDragEnd(result) {
    console.log(result)
    // const items = Array.from(characters);
    // const [reorderItems] = items.splice(result.sourse.index,1);
    // items.splice(result.destination.index,0,reorderItems);
    // setCharacters(items);
  }
  return (
    <Container>
            <MiniContainer>
      <PlayersContainer>
        <DiscContent>
        <Text>Players</Text>
        <Content>Upper Three are default selected player's tile, you can select any others by draging and droping on upper three.</Content>
        </DiscContent>
        <PlayersTile>
          <DragDropContext onDragEnd = {handleOnDragEnd}>
            <Droppable droppableId="playersID">
              {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>     
            {
              characters.map(({name,club,country}, index) => {
                return (
                  <EmptyTile>
                    <Draggable key={name} draggableId={name} index={index}>
                      {(provided) => (
                  <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>  
                    <TileCard name={name} club={club} country={country}/> 
                  </li>
                  )}
                  </Draggable>
                  </EmptyTile>
                )
              })
            }
            {provided.placeholder}  
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