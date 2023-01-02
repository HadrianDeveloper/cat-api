import { useEffect, useState } from "react";
import Image from "./Image";

export default function Result({searchTerm}) {
    
    const [breedData, setBreedData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.thecatapi.com/v1/breeds/search?name=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
            setBreedData(data[0]); 
            setIsLoading(false)
        })
    }, [searchTerm]);

    if (searchTerm && isLoading) return <p>Is loading...</p>
    if (!searchTerm) return;

    return (
        <article>
            <h3>{breedData.name}</h3>
            <p>{breedData.description}</p>
            <Image id={breedData.id} />
        </article>
    )
};


