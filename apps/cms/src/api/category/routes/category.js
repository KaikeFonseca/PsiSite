'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/categories',
      handler: 'api::category.category.find',
      config: { auth: false },
    },
  ],
};
