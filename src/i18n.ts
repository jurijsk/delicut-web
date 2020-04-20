import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: {
		translation: {
			"Make you podcast seen and listened": "Make your audience give a listen"
			,"Audio isn't native to social web. Video is. Create shareable video clips with kinetic captions out of podcast that works even when muted.": "Audio isn't native to social web. Video is. Create shareable video clips with kinetic captions out of podcast that works even when muted."
			,"Delicut simplifies and streamlines the prosses of reaching bigger audience to few simple steps": "Delicut simplifies and streamlines the prosses of reaching bigger audience to few simple steps:"
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en",

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false // react already safes from xss
		},
		fallbackLng: "en",
		react: {
			wait: true
		}
	});

export default i18n;