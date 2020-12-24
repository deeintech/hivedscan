import React from "react";

class AppFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <hr />
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                © 2020 <a href="" target="_blank" className="keychainify-checked">Dmitry Baimuratov</a>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-end">
                <li className="nav-item">
                  <a href="https://markofdao.com" className="nav-link keychainify-checked" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/dmitrydao" className="nav-link keychainify-checked" target="_blank">Twitter</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/dmitrydao" className="nav-link keychainify-checked" target="_blank">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;