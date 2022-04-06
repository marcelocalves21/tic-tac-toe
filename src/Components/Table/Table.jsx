import React, {useState, useEffect} from "react";

export const Table = () => {
    const createTable = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    
    createTable.map((element, index) => {
        return(
            <div key={index}>{element}</div>
        )
    })
}