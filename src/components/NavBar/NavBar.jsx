import SearchBar from "../SearchBar/SearchBar"
import "./NavBar.scss"
import {GrHomeRounded} from "react-icons/gr"
import {FaRegPaperPlane} from "react-icons/fa"
import {BsPlusSquare} from "react-icons/bs"
import {ImCompass2} from "react-icons/im"
import {AiOutlineHeart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { Link } from "react-router-dom"
const NavBar = () => {


    return (
        <div className="navbar">
            <h3 className="logo">Instagram</h3>
            <SearchBar className="searchbar"/>
            <div className="navbar-icons">
                <Link to="/">
                    <GrHomeRounded className="icon"/>
                </Link>
                <FaRegPaperPlane className="icon"/>
                <BsPlusSquare className="icon"/>
                <ImCompass2 className="icon"/>
                <AiOutlineHeart className="icon"/>
                <CgProfile />
            </div>
        </div>
    )
}

export default NavBar