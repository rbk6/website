import { Outlet, useLocation } from 'react-router-dom';
import './index.scss';
import Top from './Top';
import { useState } from 'react';

function Browser() {
	const [isMax, setIsMax] = useState<boolean>(false);

	const location = useLocation();
	const path = location.pathname;

	return path !== '/404' ? (
		<div className={`browser${isMax ? ' maximized' : ''}`}>
			<Top path={path} isMax={isMax} setIsMax={setIsMax} />
			<main className="content">
				<Outlet />
			</main>
		</div>
	) : (
		<div className="error">
			<main className="content">
				<Outlet />
			</main>
		</div>
	);
}

export default Browser;
