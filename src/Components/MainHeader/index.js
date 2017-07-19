import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import SideBar from '../SideBar';

export default class MainHeader extends Component {
	render() {
		return (
			<div>
			<header class={style.header}>
				<h1>Preact App</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Me</Link>
					<Link activeClassName={style.active} href="/profile/john">John</Link>
				</nav>
			</header>
			<aside>
				<SideBar
					position='left'
					width={300}
					backgroundColor='black'
				/>
			</aside>
		</div>
		);
	}
}
