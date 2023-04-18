import React, {useState} from 'react';
import styled from 'styled-components';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const AppContainer = styled.div`
  background-color: #17181F;
  color: #797A81;
  min-height: 100vh;
`

const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`

const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #FFF;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`

const App: React.FC = () => {
  const [list,setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o Pão', done: false},
    {id: 2, name: 'Comprar o Bolo', done: false},
  ])

  const handleAddTask = (taskName: string)=>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }


  return (
    <AppContainer>
      <Area>
        <Header>
          Lista de Tarefas
        </Header>
        <AddArea onEnter = {handleAddTask}/>
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}
      </Area>
    </AppContainer>
  );
}

export default App;