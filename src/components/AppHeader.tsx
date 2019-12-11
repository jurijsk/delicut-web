import React from 'react';
import {mergeStyleSets} from 'office-ui-fabric-react';

const styles = mergeStyleSets({
	header: {
		height: '48px',
		backgroundColor: 'transparent',
		position: 'absolute',
		top: 0,
	},
	inner: {
		width: 1000,
		margin: '0 auto'
	}
});

export const AppHeader: React.FunctionComponent = () => {
	return <header className={styles.header}>
		<div className={styles.inner}>
			
		</div>
	</header>
}

