import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Browser from './components/Browser';
import NewTab from './pages/NewTab';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Browser />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/new" element={<NewTab />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
