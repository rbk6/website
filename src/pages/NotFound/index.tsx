import { Link } from 'react-router-dom';
import useTitle from '../../lib/useTitle';

function NotFound() {
	useTitle('not found');
	return (
		<div>
			<h1>huh, that wasn't supposed to happen...</h1>
			<Link to="/">go back home</Link>
		</div>
	);
}

export default NotFound;
