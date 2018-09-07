// Track error by rollbar.com
if (location.host === 'kuaidihelp.com') {
  const Rollbar = require('rollbar');
  Rollbar.init({
    accessToken: '428011247d8e4256af00af8815f6d2f8',
    captureUncaught: true,
    captureUnhandledRejections: true,
    hostWhiteList: ['kuaidihelp.com'],
    payload: {
      environment: 'production',
    },
  });
}
