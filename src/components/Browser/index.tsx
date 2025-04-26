import { Outlet, useLocation } from 'react-router-dom';
import './index.scss';
import Tabs from './Tabs';
import AddressBar from './AddressBar';
import Bookmarks from './Bookmarks';

function Browser() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="browser">
			<Tabs path={path} />
			<AddressBar path={path} />
			<Bookmarks />
			<main className="content">
				<Outlet />
			</main>
		</div>
	);
}

export default Browser;
