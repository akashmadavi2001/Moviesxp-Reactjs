import React from 'react'

export default function Cards({ movieData: { Year, Poster } }) {
    return (
        <>
            <div className="card"  >
                <h5>{Year}</h5>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt="img" />
            </div>
        </>
    )
}
