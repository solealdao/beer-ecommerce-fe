import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/products" element={<ProductListPage />} />
					{/* Dynamic segments cannot be partial in v6 react-router-dom (https://reactrouter.com/en/main/route/route#dynamic-segments)*/}
					<Route
						path="/product/:productId"
						element={<ProductDetailPage />}
					/>
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
