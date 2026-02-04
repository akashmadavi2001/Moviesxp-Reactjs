import React, { useEffect, useState } from 'react';
import './Movies.css';
import Cards from './Component/Cards';

const apiKey = "http://www.omdbapi.com/?apikey=93abbcbd&";

export default function Movies() {

    const [movieData, setmovieData] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovie = async (title) => {
        const response = await fetch(`${apiKey}s=${title}`);
        const data = await response.json();
        setmovieData(data.Search);
    }

    useEffect(() => {
        searchMovie("Movie");
    }, []);

    return (
        <div className="Movies">
            <header className='header'>
                <h1>Moviesxp 🔍</h1>
                <form action={() => { searchMovie(search) }} className="search">
                    <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' />
                    <button ><i className="fi fi-br-search"></i></button>
                </form>
            </header>
            <main className='main'>
                {movieData?.length > 0 ? (
                    <>
                        {movieData.map((movie, index) => (<Cards key={index} movieData={movie} />))}
                    </>
                ) : (
                    <div className='empty'>NO movie found</div >
                )}
            </main>
        </div>
    )
}
