import { Link } from "react-router-dom"
import Card from "../components/Card"

export default function HomePage() {

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