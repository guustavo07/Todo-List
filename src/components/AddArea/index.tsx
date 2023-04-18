import { Container } from "./styles"
import { useState, KeyboardEvent } from 'react'

type Props ={
  onEnter: (taskName: string)=> void
}

export const AddArea =({onEnter}: Props) =>{
  const [inputText, setinputText] = useState("")
  const handleKeyUp = (e: KeyboardEvent) =>{
    if(e.code === 'Enter' && inputText !== ''){
        onEnter(inputText)
        setinputText('')
    }
  }

  return(
    <Container>
      <div className="image">➕</div>
      <input type="text" placeholder="Adicione uma tarefa" value={inputText} onChange={e=>setinputText(e.target.value)} onKeyUp={handleKeyUp}/>
    </Container>
  )
}