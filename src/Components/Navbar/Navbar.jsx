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
						Zelana
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={active}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/clothes'
						className={active}>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						className={active}>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/furniture'
						className={active}>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/toys'
						className={active}>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/others'
						className={active}>
						Others
					</NavLink>
				</li>
			</ul>

			<ul className="item">
                <li className="text-black/60">
					Welcome!
				</li>
				<li>
					<NavLink
						to='/my-orders'
						className={active}>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/my-account'
						className={active}>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/sign-in'
						className={active}>
						Sign Out
					</NavLink>
				</li>
			</ul>

		</nav>
	);
}

export default NavBar;