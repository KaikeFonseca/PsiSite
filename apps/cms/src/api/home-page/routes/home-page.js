'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/home-page',
      handler: 'api::home-page.home-page.find',
      config: { auth: false },
    },
  ],
};
