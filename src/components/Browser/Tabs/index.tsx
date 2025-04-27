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
	const [tabs] = useState<Tab[]>(defaultTabs);

	return (
		<div className="tabs">
			<div className="tabs-left">
				{tabs.map((tab, index) => (
					<div
						key={index}
						className={`tab ${path === tab.path ? 'active' : 'inactive'}`}
						title={`https://rbk6.dev${tab.path}`}
					>
						<span className="title">{tab.path == '/' ? 'home' : tab.path.substring(1)}</span>
						<button className="close-tab-btn">x</button>
					</div>
				))}
				<div className="new-tab">
					<button className="new-tab-btn">+</button>
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
