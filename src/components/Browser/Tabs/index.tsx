import { useEffect, useState } from 'react';
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
	};

	const createTab = () => {
		const newTab = { path: '/new', key: `new-${tabs.length}` };
		setTabs([...tabs, newTab]);
		selectTab(newTab);
	};

	const closeTab = (curr: Tab) => {
		const newTabs = tabs.filter((t) => (curr.key ? t.key !== curr.key : t.path !== curr.path));
		setTabs(newTabs);
		if (curr.key === selectedTab.key || curr.path === selectedTab.path) setSelectedTab({ path: '' });
	};

	const isAdjacent = (tab: Tab): string => {
		const selectedIndex = tabs.findIndex((t) =>
			t.key !== undefined ? t.key === selectedTab.key : t.path === selectedTab.path,
		);
		const currentIndex = tabs.findIndex((t) => (t.key !== undefined ? t.key === tab.key : t.path === tab.path));
		return currentIndex === selectedIndex - 1 ? ' left' : currentIndex === selectedIndex + 1 ? ' right' : '';
	};

	useEffect(() => {
		const stillExists = tabs.some((t) =>
			selectedTab.key !== undefined ? t.key === selectedTab.key : t.path === selectedTab.path,
		);

		if (!stillExists && tabs.length > 0) {
			const fallback = tabs[tabs.length - 1];
			setSelectedTab(fallback);
			navigate(fallback.path);
		}
	}, [tabs]);

	return (
		<div className="tabs">
			<div className="tabs-left">
				<div className="tab-wrap">
					<>
						<div className="first-curve" />
						{tabs.map((tab, index) => (
							<div
								key={index}
								className={`tab ${tab === selectedTab ? 'active' : 'inactive'}${index == 0 ? ' first' : ''}${index == tabs.length - 1 ? ' last' : ''}${isAdjacent(tab)}`}
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
					</>
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
