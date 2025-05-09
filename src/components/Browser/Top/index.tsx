import './index.scss';
import AddressBar from '../AddressBar';
import Bookmarks from '../Bookmarks';
import Tabs from '../Tabs';

interface Props {
	path: string;
	isMax: boolean;
	setIsMax: (val: boolean) => void;
}

function Top({ path, isMax, setIsMax }: Props) {
	return (
		<div className="top">
			<Tabs isMax={isMax} setIsMax={setIsMax} />
			<AddressBar path={path} />
			<Bookmarks />
		</div>
	);
}

export default Top;
