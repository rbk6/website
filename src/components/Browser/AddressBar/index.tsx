import refreshIcon from '../../../assets/icons/refresh.svg';
import './index.scss';

interface Props {
	activeTab: string;
}

function AddressBar({ activeTab }: Props) {
	return (
		<div className="address-bar">
			<div className="left">
				<div className="disabled back btn">←</div>
				<div className="disabled forward btn">→</div>
				<div className="refresh btn">
					<img src={refreshIcon} />
				</div>
			</div>
			<div className="address">
				<span className="link">localhost:3000{activeTab}</span>
			</div>
			<div className="right">
				<div className="disabled extensions btn" />
				<div className="settings btn">⋮</div>
			</div>
		</div>
	);
}

export default AddressBar;
