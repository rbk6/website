import { Outlet, useLocation } from 'react-router-dom';
import './index.scss';
import Tabs from './Tabs';
import AddressBar from './AddressBar';
import Bookmarks from './Bookmarks';

function Browser() {
	const location = useLocation();
	const activeTab = location.pathname == '/' ? '' : location.pathname;

	return (
		<div className="browser">
			<Tabs activeTab={activeTab} />
			<AddressBar activeTab={activeTab} />
			<Bookmarks />
			<main className="content">
				<Outlet />
			</main>
		</div>
	);
}

export default Browser;
