import { useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useEffect, useState } from 'react';
import refreshIcon from '../../assets/icons/refresh.svg';

function Header() {
	interface Tab {
		link: string;
		index?: number;
	}
	const [tabs, setTabs] = useState<Tab[]>([{ link: '/' }, { link: '/about' }, { link: '/projects' }]);
	const [isMaximized, setIsMaximized] = useState<boolean>(false);
	const location = useLocation();
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState<number>(0);

	useEffect(() => {
		setActiveTab(tabs.findIndex((tab) => tab.link === location.pathname));
	}, [location.pathname]);

	const createTab = () => {
		const newTab: Tab = { link: '/new', index: tabs.length + 1 };
		setTabs([...tabs, newTab]);
		setActiveTab(tabs.length);
		if (tabs[activeTab].link != '/new') navigate('/new');
	};

	const isActive = (_tab: Tab, i: number): boolean => i === activeTab;

	const isAdjacent = (index: number): boolean => {
		// index +-1
		if (isActive(tabs[index + 1], index + 1)) {
			return true;
		}
		return false;
	};

	const closeTab = (index: number) => {
		setTabs((prevTabs) => {
			const newTabs = prevTabs.filter((_, i) => i !== index);
			setActiveTab(index - 1);
			return newTabs;
		});
	};

	const changeTab = (index: number) => {
		if (tabs[index].link !== location.pathname) {
			navigate(tabs[index].link);
		}
		setActiveTab(index);
	};

	return (
		<div className={`${isMaximized ? 'maximized' : ''} wrapper`}>
			<div className="browser-top">
				<button
					onClick={() => {
						setIsMaximized(!isMaximized);
					}}
					className="window maximize"
				></button>
				<button className="window minimize"></button>
				<button className="window close"></button>
			</div>
			<nav className="header">
				<ul>
					{tabs.map((tab, index) => {
						return (
							<li className={`${isActive(tab, index) ? 'active' : 'inactive'} tab`} key={`tab-${tab.link}-${index}`}>
								<button
									className={`${tabs.length > 15 ? 'hide-text' : ''} select-tab`}
									disabled={isActive(tab, index)}
									onClick={() => changeTab(index)}
									title={
										'' == tab.link.substring(1) ? 'home' : tab.index != undefined ? 'new tab' : tab.link.substring(1)
									}
								>
									{'' == tab.link.substring(1) ? 'home' : tab.index != undefined ? 'new tab' : tab.link.substring(1)}
								</button>
								<button onClick={() => closeTab(index)} className="x">
									×
								</button>
								<p className={`${isAdjacent(index) || isActive(tab, index) ? 'hide' : 'show'} pipe`}>|</p>
							</li>
						);
					})}
					<li className="create-tab">
						<button onClick={() => createTab()}>+</button>
					</li>
				</ul>
				<div className="address-bar">
					<div className="side-btns left">
						<button>←</button>
						<button disabled>→</button>
						<button>
							<img src={refreshIcon} />
						</button>
					</div>
					<input
						disabled
						value={location.pathname != '/new' ? `https://rbk6.dev${location.pathname}` : ''}
						className="bar"
					></input>
					<div className="side-btns right">
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
