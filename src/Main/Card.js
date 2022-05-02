import React from 'react'

export default function Card({result}) {
    return (
        <section className='card' >
           <p className='card-p'><a href={result.url}>{result.url}</a></p>
           <h3 className='card-h'><a href={result.url}>{result.title}</a></h3>
           <p className='card-d'>{result.description}</p>

        </section>
    )
}
