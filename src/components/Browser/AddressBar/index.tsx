import './index.scss';

interface Props {
	activeTab: string;
}

function AddressBar({ activeTab }: Props) {
	return (
		<div className="address-bar">
			<div className="left">
				<div className="back btn" />
				<div className="forward btn" />
				<div className="refresh btn" />
			</div>
			<div className="address">
				<span className="link">localhost:3000{activeTab}</span>
			</div>
			<div className="right">
				<div className="extensions btn" />
				<div className="settings btn" />
			</div>
		</div>
	);
}

export default AddressBar;
