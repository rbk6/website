import './index.scss';

interface Props {
	path: string;
}

function Tabs({ path }: Props) {
	return (
		<div className="tabs">
			<div className="tab">
				<span className="title">{path == '/' ? 'home' : path.substring(1)}</span>
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
