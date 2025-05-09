import { Outlet, useLocation } from 'react-router-dom';
import './index.scss';
import Top from './Top';
import { useState } from 'react';

function Browser() {
	const [isMax, setIsMax] = useState<boolean>(false);
	const [isClosed, setIsClosed] = useState<boolean>(false);

	const location = useLocation();
	const path = location.pathname;

	if (isClosed) return <></>;

	if (path === '/404') {
		return (
			<div className="error">
				<main className="content">
					<Outlet />
				</main>
			</div>
		);
	}

	return (
		<div className={`browser${isMax ? ' maximized' : ''}`}>
			<Top path={path} isMax={isMax} setIsMax={setIsMax} isClosed={isClosed} setIsClosed={setIsClosed} />
			<main className="content">
				<Outlet />
			</main>
		</div>
	);
}

export default Browser;
