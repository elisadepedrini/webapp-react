import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import Card from "../components/Card"

export default function FilmPage() {

    const {id} = useParams()
    const url = `http://127.0.0.1:3000/movies/${id}`
    const [film, setFilm] = useState(null)

    useEffect(() => {
        fetchUrl(url)
    }, [url])


    function fetchUrl(url) {
        fetch(url)
        .then(res => res.json())
        .then (data => setFilm(data))
        .catch (error => console.error(error))
    }

    console.log(film)

    if(!film) {
        return <p>Caricamento...</p>
    }

    return (
        <>
            <h1>Single film {id}</h1>
            <section className="py-5">
                <div className="container">
                    <Card film={film}>
                        <p className="card-text"><strong>Regista:</strong> {film.director}</p>
                        <p className="card-text"><strong>Anno:</strong> {film.release_year}</p>
                    </Card>
                </div>
            </section>
        </>
    )
}