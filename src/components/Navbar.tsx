import { useState } from "react";
import { Link } from "react-router";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div>
                <div>
                    <Link to="/">
                        social<span>.media</span>
                    </Link>

                    {/* Destop Links */}
                    <div>
                        <Link to={"/"}> Home </Link>
                        <Link to={"/create"}> Create Post </Link>
                        <Link to={"/communities"}> Communities </Link>
                        <Link to={"/community/create"}> Create Community </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div>
                        <button onClick={() => setMenuOpen(!menuOpen)}>Open</button>
                    </div>

                    {/* Mobile Links Menu */}
                    {menuOpen && (
                        <div>
                            <Link to={"/"}> Home </Link>
                            <Link to={"/create"}> Create Post </Link>
                            <Link to={"/communities"}> Communities </Link>
                            <Link to={"/community/create"}> Create Community </Link>
                        </div>
                    )}
                    {/* <div>
                        <div>
                            <Link to={"/"}> Home </Link>
                            <Link to={"/create"}> Create Post </Link>
                            <Link to={"/communities"}> Communities </Link>
                            <Link to={"/community/create"}> Create Community </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};