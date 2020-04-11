import React from 'react';
import AppStyles from './styles/Application.module.scss';

import {initFabricUITheme} from './styles';
initFabricUITheme();

import {Fabric} from '@fluentui/react';

import {AppHeader} from './components/AppHeader';
import {Translation} from 'react-i18next';
import {Helmet} from "react-helmet";
import {Homepage} from './pages/Homepage/Homepage';

export const Application: React.FunctionComponent = () => {
	return (
		<Translation>{(t) =>
			<Fabric>
				<Helmet>
					<title>{t("Delicut - Make your podcast seen and listened")}</title>
					<meta name="description" content={t("Delicut allows talk-audio producers to create short engaging video cuts using audio and transcription which work even when muted")} />
					
					{/* Global site tag (gtag.js) - Google Analytics  */}
					<script async src='https://www.googletagmanager.com/gtag/js?id=UA-149833499-1'></script>
					<script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'UA-149833499-1');
					`}
					</script>
				</Helmet>
				<div className={AppStyles.scssTest}/>	
				<AppHeader />
				<Homepage />
			</Fabric>
		}</Translation>
	);
};
