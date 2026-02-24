import "./Nav.css"

export default function Nav(){
    return (
        <nav className="nav">
            <img className="mainLogo" src="./logo/main_logo.png" alt="Main logo png"/>
            <ul className="navList">
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Our Team
                </li>
            </ul>
        </nav> 
    )
}