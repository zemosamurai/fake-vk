import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { App } from 'src/app/App.tsx'
import { store } from 'src/app/store.ts'

import './assets/styles/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
)
