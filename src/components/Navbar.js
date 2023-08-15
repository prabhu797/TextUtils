import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>

  <button className="navbar-toggler" type="button" onClick={toggleMenu} data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="fasle" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link" to="/about">About</Link> */}
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} id="navbarSupportedContent">
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
  // .isRequired is used to mention that we need this prop irrespctive of situation. Else we will get an error.
  //How ever if defaultProps is set, then it will not throw an Error.
  // title: PropTypes.string.isRequired
}

//If in case I dont pass any props then use below props as default
Navbar.defaultProps = {
  title: 'Web Page Name'
}