import React from "react";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    // We use backtik below so thatwe can use template literal....
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* bg-body-tertiary */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li>
          </ul>
          
                <div className={`form-check form-switch my-7 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
                  </div>
                <div className={`form-check form-switch my-10 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleSwitch} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable green Mode</label>
                </div>
        </div>
      </div>
    </nav>
  );
}
// Navbar.propTypes = {
//     title : PropType.string,
//     about : PropType.string
// };

Navbar.defaultProps = {
  title: "TextUtil",
  about: "About",
};
