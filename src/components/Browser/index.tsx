import { Outlet } from 'react-router-dom';
import './index.scss';
import Top from './Top';

function Browser() {
	return (
		<div className="browser">
			<Top />
			<main className="content">
				<Outlet />
			</main>
		</div>
	);
}

export default Browser;
