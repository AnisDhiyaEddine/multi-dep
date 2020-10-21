import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import Fib from './Fib';
import Other from './Other';
function App() {
	return (
		<Router>
			<div>
				<Link to='/'>Home Page</Link>
				<Link to='/other'>Other Page</Link>

				<div>
					<Route exact path='/' component={Fib} />
					<Route
						exact
						path='/other'
						component={Other}
					/>
				</div>
			</div>
		</Router>
	);
}

export default App;
