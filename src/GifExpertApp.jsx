import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // Categories.push('Valorant');
        // setCategories(Cat => [...Cat, 'Valorant']);

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* una forma de como realizar la llamada, pero no es la más optimo */}
            {/* <AddCategory setCategories={setCategories} /> */}

            {/* forma ideal */}
            <AddCategory onNewCategory={value => onAddCategory(value) } />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        Category={category}
                    />
                ))
            }
        </>
    )
};