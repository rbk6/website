import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { Circle, Layer, Stage } from 'react-konva';
import { useState } from 'react';
import refreshIcon from '../../assets/icons/refresh.svg';

function Header() {
	interface Tab {
		title: string;
		link: string;
		isOpen: boolean;
	}

	const initialTabs = [
		{
			title: 'home',
			link: '/',
			isOpen: true,
		},
		{
			title: 'about',
			link: '/about',
			isOpen: true,
		},
		{
			title: 'projects',
			link: '/projects',
			isOpen: true,
		},
	];

	// @ts-ignore
	const [tabs, setTabs] = useState<Array<Tab>>(initialTabs);
	const location = useLocation();

	return (
		<div className="wrapper">
			<Stage width={125} height={75} className="browser">
				<Layer>
					<Circle x={20} y={50} radius={15} fill="green" />
					<Circle x={60} y={50} radius={15} fill="orange" />
					<Circle x={100} y={50} radius={15} fill="red" />
				</Layer>
			</Stage>
			<nav className="header">
				<ul>
					{tabs.map((tab) => {
						return (
							<li key={tab.title}>
								<Link to={tab.link}>{tab.title}</Link>
								<button>×</button>
							</li>
						);
					})}
				</ul>
				<div className="address-bar">
					<div className="side-btns">
						<button>←</button>
						<button disabled>→</button>
						<button>
							<img src={refreshIcon} />
						</button>
					</div>
					<input disabled value={`https://rbk6.dev${location.pathname}`} className="bar"></input>
					<div className="side-btns">
						<button>
							<span>...</span>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
