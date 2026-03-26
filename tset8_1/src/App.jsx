import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToggleBox from './componenets/ToggleBox'
import DeleteModal from './componenets/Modal/DeleteModal'
import AsyncCounter from './componenets/AsyncCounter'
const JOKES = [{id:1,text: "Joke A"},{id:2,text:"Joke B"}];
export default function App(){
    const[selectedID,setSelectedID]= useState(null);
    return(
        <div>
            {JOKES.map(j=>(
                <JokeItem key={j.id} joke={j} isSelect={selectedID === j.id}
                onSelect={setSelectedID}/>
            )

            )}
        </div>
    )
}

