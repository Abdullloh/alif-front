import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers/Reducers';
import logger from 'redux-logger';

const initialState: any = [];
const persistConfig: any = {
	storage,
	key: 'root',
	whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(applyMiddleware(logger, reduxThunk)),
);

const persistor = persistStore(store);
export { store as default, persistor };
