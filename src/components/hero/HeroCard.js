import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className='col'>
        <div className='card'>
            <div className='row no-gutters'>
                <img src={`/assets/${id}.jpg`} className='card-img-top' alt={superhero} />
            </div>
        </div>
        </div>
    )
}
