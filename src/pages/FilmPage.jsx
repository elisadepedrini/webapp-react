

export default function FilmPage() {


    return (
        <>
            <h1>Single film</h1>
            <section className="py-5">
                <div className="container">
                    <Card film={film}>
                        <p className="card-text"><strong>Regista:</strong> {film.director}</p>
                        <p className="card-text"><strong>Durata:</strong> {film.duration}</p>
                    </Card>
                </div>
            </section>
        </>
    )
}