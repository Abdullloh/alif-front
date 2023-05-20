import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './components/ErrorFallback';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ScrollToTop } from 'services/ScrollToTop/ScrollToTop';
import queryClient from 'configs/react-query.config';
import { GlobalRoutes } from 'configs/global-routes';
import './App.css';

// function App() {
// 	return (
// 		<div className="App">
// 			<ErrorBoundary FallbackComponent={ErrorFallback}>
// 				<QueryClientProvider client={queryClient}>
// 					<main className="main pl-16 bg-[#F9F9F9] h-screen">
// 						<ScrollToTop />
// 						<GlobalRoutes />
// 					</main>
// 					<ReactQueryDevtools initialIsOpen={false} />
// 				</QueryClientProvider>
// 			</ErrorBoundary>
// 		</div>
// 	);
// }

const App = () => (
	<div className="App">
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<QueryClientProvider client={queryClient}>
				<main className="main  bg-[#F9F9F9] h-screen">
					<ScrollToTop />
					<GlobalRoutes />
				</main>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ErrorBoundary>
	</div>
);

export default App;
