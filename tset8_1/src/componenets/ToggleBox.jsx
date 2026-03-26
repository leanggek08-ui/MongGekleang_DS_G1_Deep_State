import {useState} from 'react';
import './ToggleBox.css'
export default function ToggleBox(){
    const [isSlected,setIsSelected] = useState(false);
    const handleToogle = ()=>{
        
        setIsSelected(!isSlected);
    }
   
    return(
        <>
        <div>
            <p className={isSlected ? "active p-2 ":"p-10"}>Style me!</p>
            <button onClick={handleToogle} className='border p-1'>
                {isSlected ?"Deactivate": "Activate"}
            </button>

        </div>
        </>
    )
}
