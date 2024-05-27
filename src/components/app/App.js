import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'

import { AppHeader } from '../../modules/AppHeader'
import { AppRouter } from '../../AppRouter'
import Spinner from '../../ui/Spinner'
import '../../firebase'

const App = () => {
	return (
		<Router>
			<AppHeader></AppHeader>
			<div className='app'>
				<main>
					<Suspense fallback={<Spinner />}>
						<AppRouter />
					</Suspense>
				</main>
			</div>
		</Router>
	)
}

export default App
