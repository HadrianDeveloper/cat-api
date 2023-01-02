import { useEffect, useState } from "react";

export default function Image({id}) {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data[0].url)
        })
    }, [id]);

    return (
        <img src={imageUrl} />
    )
};