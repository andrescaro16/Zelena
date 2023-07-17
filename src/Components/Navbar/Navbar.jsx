import { NavLink } from "react-router-dom";
import './Styles.css';

const NavBar = () => {

    const activeStyle = 'active';
	const active = ({ isActive }) => isActive ? activeStyle : '';


	return(
		<nav className="navClass">

			<ul className="item">
                <li>
                    <img src="https://i.ibb.co/86mCXDs/image.png" alt="logo" style={{"width": "40px"}} />
                </li>
				<li className="title">
					<NavLink to='/'>
						Zelena
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={active}>
						Contact us
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/others'
						className={active}>
						About
					</NavLink>
				</li>
			</ul>

			<ul className="item">
                <li className="text-black/60">
					Welcome!
				</li>
				<li>
					<NavLink
						to='/my-account'
						className={active}>
						Our Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/sign-in'
						className={active}>
						Sign In
					</NavLink>
				</li>
			</ul>

		</nav>
	);
}

export default NavBar;