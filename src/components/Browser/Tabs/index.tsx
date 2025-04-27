import { useState } from 'react';
import './index.scss';

interface Props {
	path: string;
}

interface Tab {
	path: string;
	key?: string;
}

function Tabs({ path }: Props) {
	const defaultTabs: Tab[] = [{ path: '/' }, { path: '/about' }, { path: '/ projects' }];
	const [tabs, setTabs] = useState<Tab[]>(defaultTabs);

	const createTab = () => setTabs([...tabs, { path: '/new', key: `new-${tabs.length}` }]);
	const closeTab = (curr: Tab) => {
		if (curr.key === undefined) {
			setTabs(tabs.filter((tab) => tab.path !== curr.path));
		} else {
			setTabs(tabs.filter((tab) => tab.key !== curr.key));
		}
	};

	return (
		<div className="tabs">
			<div className="tabs-left">
				<div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', margin: 0 }}>
					{tabs.map((tab, index) => (
						<div
							key={index}
							className={`tab ${path === tab.path ? 'active' : 'inactive'}`}
							title={tab.key === undefined ? `https://rbk6.dev${tab.path}` : 'new tab'}
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
