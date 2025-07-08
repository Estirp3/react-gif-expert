import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({ category }) => {
    //Peticion HHTP API
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* {
             //Forma UNO
                isLoading 
                    ? (<h2>Cargando...</h2>)
                    : null
            } */}

            {
                //Forma DOS
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map((image) => (
                    <GiftItem key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}
