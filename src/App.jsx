import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	const handleDecrease = () => {
		if (count !== 0) {
			setCount((count) => count - 1)
		}
	}

	return (
		<>
			<h1>Counter App</h1>
			<div className='card'>
				<p className=''>{count}</p>
				<div className=' btns'>
					<button onClick={handleDecrease}>-</button>
					<button onClick={() => setCount((count) => count + 1)}>+</button>
				</div>

				<button onClick={() => setCount(0)}>Reset</button>
			</div>
		</>
	)
}

export default App
