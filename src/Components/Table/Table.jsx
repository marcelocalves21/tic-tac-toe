import React, {useState} from "react";
import './table.css'


export const Table = () => {
    const [board, setBoard] = useState([
        {
            player:null,
            style:'reverse-l'
        },
        {
            player:null,
            style:'reverse-l'
        },
        {
            player:null,
            style:'board-right'
        },
        {
            player:null,
            style:'reverse-l'
        },
        {
            player:null,
            style:'reverse-l'
        },
        {
            player:null,
            style:'board-right'
        },
        {
            player:null,
            style:'board-bottom'
        },
        {
            player:null,
            style:'board-bottom'
        },
        {
            player:null,
            style:''
        }
    ])
    const [player, setPlayer] = useState(1)
    const playerMove = (index) => {
        
        
    }
    return(
    <div className="container">

        {board.map((ele, i) => {
            return(
                <div 
                    key={i} 
                    className={`board ${ele.style}`}
                    onClick={() => {
                        
                    }}>
                    
                </div>
            )
        })}
    </div>
   )
}