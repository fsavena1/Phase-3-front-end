import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navBar">
            <div className="title">
                <NavLink to="/" >
                    <h1><iframe src="https://giphy.com/embed/cXblnKXr2BQOaYnTni" width="40" height="40" frameBorder="0" title="gif"></iframe> TV SHOW FINDER <iframe src="https://giphy.com/embed/cXblnKXr2BQOaYnTni" width="40" height="40" frameBorder="0" title="other gif"></iframe></h1>
                </NavLink>
            </div>
            <div className='routes'>
                <NavLink to="/" className="button">
                    <h1>Home!</h1>
                </NavLink>
                <NavLink exact to="/search" className="button">
                    <h1>Search!</h1>
                </NavLink>
                <NavLink exact to="/watchlist" className='button'>
                    <h1>Watch List!</h1>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
