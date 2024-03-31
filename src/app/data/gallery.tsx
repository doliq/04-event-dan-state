import { sculptureList } from "./article";
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClickplus() {
        setIndex((index + 1)% 5);  // counter index + 1, utk melihat data selanjutnya
    }

    function handleClickmines() {
       if (index === 0){

        setIndex(4);
       }else{
        setIndex(index -1);
       }
    }

    let sculpture = sculptureList[index];

    return(
        <>
        <button
        onClick={handleClickmines}
        className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel sebelumnya</button>
        <button
        onClick={handleClickplus}
        className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel selanjutnya</button>
        <h2><i>{sculpture.name}</i>oleh {sculpture.artist} </h2>
        <h3>{index + 1} dari {sculptureList.length} </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>
            {sculpture.description}
        </p>
        </>
    );
}