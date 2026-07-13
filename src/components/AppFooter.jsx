import { Link } from "react-router-dom";

export default function AppFooter() {

    return (
        <>
        {/* footer della pagina */}
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    <div className="col">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p className="fs-6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias.
                        </p>
                    </div>
                    <div className="col">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/" className="text-dark">Home</Link>
                            </li>
                            <li>
                                <Link to="/contacts" className="text-dark">Contatti</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}