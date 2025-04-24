import './index.scss';

interface Props {
	activeTab: string;
}

function Tabs({ activeTab }: Props) {
	return (
		<div className="tabs">
			<div className="tab">
				<span className="title">{activeTab == '' ? 'home' : activeTab.substring(1)}</span>
			</div>
			<div className="controls">
				<div className="maximize btn" />
				<div className="minimize btn" />
				<div className="close btn" />
			</div>
		</div>
	);
}

export default Tabs;
