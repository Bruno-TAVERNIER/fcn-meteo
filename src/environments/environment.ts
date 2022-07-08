// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  geoApi: 'https://geo.api.gouv.fr/communes',
  meteoApi : 'https://api.openweathermap.org/data/2.5/onecall?exclude=daily,hourly,minutely,alerts&units=metric&lang=fr&appid=d2e33b810d399f2fb3d6791d161388ec',
  prevApi: 'https://api.openweathermap.org/data/2.5/onecall?exclude=current,hourly,minutely,alerts&units=metric&lang=fr&appid=d2e33b810d399f2fb3d6791d161388ec'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
