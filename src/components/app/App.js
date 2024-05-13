import { AppHeader } from '../../modules/AppHeader'
import { MainPage } from '../../pages/MainPage'

const App = () => {
	return (
		<>
			<AppHeader></AppHeader>
			<div className='app'>
				<MainPage></MainPage>
			</div>
		</>
	)
}

export default App
