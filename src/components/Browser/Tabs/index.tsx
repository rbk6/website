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
			{tabs.map((tab, index) => (
				<div key={index} className={`tab ${path === tab.path ? 'active' : 'inactive'}`}>
					<span className="title">{tab.path == '/' ? 'home' : tab.path.substring(1)}</span>
				</div>
			))}
			<div className="controls">
				<div className="maximize btn" />
				<div className="minimize btn" />
				<div className="close btn" />
			</div>
		</div>
	);
}

export default Tabs;
