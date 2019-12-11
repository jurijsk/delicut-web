import React from 'react';
import ReactDOM from 'react-dom';
import {Application} from './Application';
import {mergeStyles} from 'office-ui-fabric-react';
import './i18n';

// Inject some global styles
mergeStyles({
	selectors: {
		':global(body), :global(html), :global(#app)': {
			margin: 0,
			padding: 0,
			height: '100vh'
		}
	}
});

ReactDOM.render(

	<Application />

	, document.getElementById('app'));
