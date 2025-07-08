import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInchange = ({ target }) => {
        setInputValue(target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInpurValue = inputValue.trim();
        if (newInpurValue.length <= 1) return;

        // onAddCategory(categories => [inputValue, ...categories])
        onNewCategory(newInpurValue)
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInchange}
            />
        </form>
    )
}
