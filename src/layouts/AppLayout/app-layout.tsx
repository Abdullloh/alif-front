import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { BaseLayoutProps } from './types';
import { Loader } from 'components/Loader/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/ErrorFallback/index';
// import Header from 'layouts/header/header';

const AppLayout: FC<BaseLayoutProps> = ({ children }) => (
	<div>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			{/* <Header /> */}
			<div className="pt-16">
				<Loader>
					<>{children || <Outlet />}</>
				</Loader>
			</div>
		</ErrorBoundary>
	</div>
);

export default AppLayout;
