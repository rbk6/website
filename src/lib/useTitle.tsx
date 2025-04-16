import { useEffect } from 'react';

const useTitle = (title: string) => {
	useEffect(() => {
		document.title = `rbk6 | ${title}`;
	});
};

export default useTitle;
