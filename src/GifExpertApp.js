import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One piece'])
    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr></hr>
      
        <ol>
            
                {
                    categories.map( ( category ) => {
                     return <GiftGrid 
                            category={ category } 
                            key={ category }
                        />
                    })
                }            
        </ol>
    </>
  )
}
