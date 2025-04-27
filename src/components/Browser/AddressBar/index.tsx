import { useLocation } from 'react-router-dom';
import refreshIcon from '../../../assets/icons/refresh.svg';
import './index.scss';

function AddressBar() {
	const location = useLocation();
	const path = location.pathname;
	const url = path === '/new' ? '' : `https://rbk6.dev${path === '/' ? '' : path}`;

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
				<div className="link">{url}</div>
			</div>
			<div className="right">
				<div className="disabled extensions btn" />
				<div className="settings btn">⋮</div>
			</div>
		</div>
	);
}

export default AddressBar;
