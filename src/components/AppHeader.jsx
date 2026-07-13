import { NavLink } from "react-router-dom"

export default function AppHeader() {

    return (
        <>
        <header>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <ul className="d-flex">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/contacts">Contatti</NavLink>
                    </ul>
                </div>
            </nav>
        </header>

        </>
    )
}