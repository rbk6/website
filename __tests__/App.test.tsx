import React from 'react';
import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Routing', () => {
	test('renders App component', () => {
		render(<App />);
	});
});
