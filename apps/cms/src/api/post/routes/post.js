'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/posts',
      handler: 'api::post.post.find',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/posts/:id',
      handler: 'api::post.post.findOne',
      config: { auth: false },
    },
  ],
};
