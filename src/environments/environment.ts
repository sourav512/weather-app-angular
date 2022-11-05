// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://open-weather13.p.rapidapi.com/city/landon',

  XRapidAPIKeyHeaderValue: 'f96be8d6b5mshf0a87ff45f7e70ep18a35djsnceb9e7309615',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',

  XRapidAPIHostName: 'X-RapidAPI-Host',
  XRapidAPIHostValue: 'open-weather13.p.rapidapi.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
