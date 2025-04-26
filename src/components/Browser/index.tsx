import { Outlet, useLocation } from 'react-router-dom';
import './index.scss';
import Top from './Top';

function Browser() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="browser">
			<Top path={path} />
			<main className="content">
				<Outlet />
			</main>
		</div>
	);
}

export default Browser;
