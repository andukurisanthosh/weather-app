import { Link, Outlet } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="nav">
                <h1>WEATHER APP</h1>
                <ul className="nav-items">
                    <li className="link-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="link-item"><Link className="nav-link" to="/contactus">ContactMe</Link></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Header