import { Link } from "react-router-dom"

export default function Card({ film, children }) {

    return (
        <>
        <div className="card h-100">
            <img
                src={film.image || "https://placehold.co/600x400"}
                alt={film.title}
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{film.release_year}</h6>
                <p className="card-text">{film.abstract}</p>
                <p className="card-text">{film.genre}</p>

                {children}
            </div>
        </div>
        </>
    )
}