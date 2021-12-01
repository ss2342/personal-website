import "./navbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Satyen.</a>
                    <div className="itemContainer">
                        <Person classname="icon" />
                        <span>+1 973 830 7654</span>
                    </div>
                    <div className="itemContainer">
                        <Mail classname="icon" />
                        <span>srs833@nyu.edu</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
