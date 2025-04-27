import { useEffect } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';

function NewTab() {
	const navigate = useNavigate();
	const navigationType = useNavigationType();

	useEffect(() => {
		const isRefresh =
			navigationType === 'POP' &&
			(window.performance?.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload';
		if (isRefresh) {
			navigate('/', { replace: true });
		}
	}, [navigate, navigationType]);

	return <></>;
}

export default NewTab;
