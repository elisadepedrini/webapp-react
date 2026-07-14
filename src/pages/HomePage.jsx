import { Link } from "react-router-dom"
import Card from "../components/Card"
import { useState, useEffect } from "react"

export default function HomePage() {


    const [films, setFilms] = useState([])
    const url = "http://127.0.0.1:3000/movies"

    function fetchFilms(url) {
        fetch(url)
        .then(res => res.json())
        .then(data => setFilms(data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchFilms(url)
    }, [])

    

    return (
        <>
        <main className="vh-100">
            <h1>Lista dei film</h1>
            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {films.map(film => (
                            <div className="col" key={film.id}>
                                <Card film={film}>
                                    <Link to={`/film/${film.id}`} className="btn btn-primary">Scopri di più</Link>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </main>
        </>
    )
}