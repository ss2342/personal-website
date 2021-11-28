import "./navbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
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
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
