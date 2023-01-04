import { useEffect, useState } from "react";
import Image from "./Image";

export default function Result({ searchTerm }) {
  const [breedData, setBreedData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(`https://api.thecatapi.com/v1/breeds/search?name=${searchTerm}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.length) {

  //           setBreedData(data[0]);
  //         } else {
  //             setIsError(true)
  //         }
  //         setIsLoading(false)
  //       });
  //   }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false)
    fetch(`https://api.thecatapi.com/v1/breeds`)
      .then((response) => response.json())
      .then((data) => {
        const filteredBreed = data.filter(
          (breed) => breed.name.toLowerCase() === searchTerm.toLowerCase()
          );
       if(filteredBreed.length) setIsError(false)
        return filteredBreed
      })
      .then((filteredBreed) => {
        if (filteredBreed.length) {
          console.log(filteredBreed.length, 33);
          setBreedData(filteredBreed[0]);
        } else {
          console.log(filteredBreed.length, 36);
          setIsError(true)
        }
        setIsLoading(false);
      });
  }, [searchTerm]);

  if (!searchTerm) return;
  if (searchTerm && isError && !isLoading) return <p>{searchTerm} Not Found</p>;
  if (searchTerm && !isError && isLoading) return <p>Is loading...</p>;

  return (
    <article>
      <h3>{breedData.name}</h3>
      <p>{breedData.description}</p>
      <Image id={breedData.id} />
    </article>
  );
}
