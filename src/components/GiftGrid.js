import React, {t } from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
//import { getGift } from '../helpers/getGift';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ( { category } ) => {

    const {data:images,loading} = useFetchGifts( category );



  return (
      <>
        <h3 className='animate__animated animate__fadeIn'> {category} </h3>

        { loading && <p className='animate__animated animate__bounceInLeft'>Loading...</p> }
        {
            <div className='card-grid'>              
                {
                    images.map( ( img ) => {
                            return <GiftGridItem 
                            key={ img.id }
                            {...img }/>
                    })
                }
            
            </div>
        }
    </>
  )
}
