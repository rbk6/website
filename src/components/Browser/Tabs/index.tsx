import { useState } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';

interface Tab {
	path: string;
	key?: string;
}

function Tabs() {
	const defaultTabs: Tab[] = [{ path: '/' }, { path: '/about' }];
	const [selectedTab, setSelectedTab] = useState<Tab>(defaultTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(defaultTabs);
	const navigate = useNavigate();

	const selectTab = (curr: Tab): void => {
		if (curr.key === undefined && curr.path !== '/new') {
			setSelectedTab(curr);
			navigate(curr.path);
		} else {
			navigate(curr.path);
			setSelectedTab(curr);
		}
		console.log('selected: ', curr);
	};

	const createTab = () => {
		const newTab = { path: '/new', key: `new-${tabs.length}` };
		setTabs([...tabs, newTab]);
		selectTab(newTab);
	};

	const closeTab = (curr: Tab) => {
		const currentIndex = tabs.indexOf(curr);
		if (curr.key === undefined) {
			setTabs(tabs.filter((tab) => tab.path !== curr.path));
		} else {
			setTabs(tabs.filter((tab) => tab.key !== curr.key));
		}

		if (currentIndex >= tabs.length) {
			selectTab(tabs[tabs.length - 1]);
		}
	};

	const isAdjacent = (tab: Tab): string => {
		const selectedIndex = tabs.findIndex((t) => t.path === selectedTab.path);
		const currentIndex = tabs.indexOf(tab);
		return currentIndex === selectedIndex - 1 ? 'left' : currentIndex === selectedIndex + 1 ? 'right' : '';
	};

	return (
		<div className="tabs">
			<div className="tabs-left">
				<div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', margin: 0 }}>
					{tabs.map((tab, index) => (
						<div
							key={index}
							className={`tab ${tab === selectedTab ? 'active' : 'inactive'} ${isAdjacent(tab)}`}
							title={tab.key === undefined ? `https://rbk6.dev${tab.path}` : 'new tab'}
							onClick={() => selectTab(tab)}
						>
							<span className="title">
								{tab.path == '/' ? 'home' : tab.path == '/new' ? 'new tab' : tab.path.substring(1)}
							</span>
							<button onClick={() => closeTab(tab)} className="close-tab-btn">
								x
							</button>
						</div>
					))}
				</div>
				<div className="new-tab">
					<button onClick={() => createTab()} className="new-tab-btn">
						+
					</button>
				</div>
			</div>
			<div className="tabs-right">
				<div className="controls">
					<div className="maximize btn" />
					<div className="minimize btn" />
					<div className="close btn" />
				</div>
			</div>
		</div>
	);
}

export default Tabs;
