import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './App.tsx';

window.addEventListener('load', () => {
	document.body.classList.add('loaded');
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
