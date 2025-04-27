import './index.scss';
import AddressBar from '../AddressBar';
import Bookmarks from '../Bookmarks';
import Tabs from '../Tabs';

function Top() {
	return (
		<div className="top">
			<Tabs />
			<AddressBar />
			<Bookmarks />
		</div>
	);
}

export default Top;
