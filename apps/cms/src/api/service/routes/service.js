'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/services',
      handler: 'api::service.service.find',
      config: { auth: false },
    },
  ],
};
