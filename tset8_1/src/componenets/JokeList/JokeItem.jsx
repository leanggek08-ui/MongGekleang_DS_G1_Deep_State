import { useState } from "react";

const JokeItem = ({joke,onSelect,isSelect})=>(
    <div onClick={()=>onSelect(joke.id)}
    className={`p-4 border cursor-pointer ${isSelect ? "bg-blue-100 border-blue-500":""}`}>
        {joke.text}

    </div>
);
