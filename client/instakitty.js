// Import react from node modules
import React from 'react';

// Import react DOM
import { render } from 'react-dom';

// Import CSS 
import css from './styles/style.styl';

// Import components
import Main from './components/Main';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

// React Router for linking
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

// Create routes
const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Photogrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>	
	)
render(router, document.getElementById('root')	);
