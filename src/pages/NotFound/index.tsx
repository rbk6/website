import useTitle from '../../lib/useTitle';

function NotFound() {
	useTitle('not found');
	return (
		<div>
			<h1>404</h1>
			<hr />
			<p>not too sure how we got here...</p>
		</div>
	);
}

export default NotFound;
