import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    // hooks que mantienen el estado
    const [categories, setCategories] = useState(['HUNTER X HUNTER']);

    const onAddCategory = (newCategory) => {
        // Convertir la nueva categoría a minúsculas
        const lowerCaseNewCategory = newCategory.toLowerCase();
        // if (categories.includes(newCategory)) return
        // Validar si la categoría ya existe (sin importar mayúsculas/minúsculas)
        if (categories.some(category => category.toLowerCase() === lowerCaseNewCategory)) return;//el include se cambia por el some

        //categories.push(onNewCategory)
        //Agregar un nuevo estado
        setCategories([newCategory])
        //Para que no se borre las categorias anteriores y vamos agregando nuevas
        //setCategories([newCategory, ...categories])
        //setcategories(cat =>[...cat,'Valorant'])
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>


            <AddCategory

                onNewCategory={(value) => onAddCategory(value)}
            />
            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>Agrear</button> */}

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                )
                )}


        </>
    );
};
