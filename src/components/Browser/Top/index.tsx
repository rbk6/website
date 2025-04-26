import './index.scss';
import AddressBar from '../AddressBar';
import Bookmarks from '../Bookmarks';
import Tabs from '../Tabs';

interface Props {
	path: string;
}

function Top({ path }: Props) {
	return (
		<div className="top">
			<Tabs path={path} />
			<AddressBar path={path} />
			<Bookmarks />
		</div>
	);
}

export default Top;
