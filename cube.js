module.exports = {
  queryRewrite: (query, {
    securityContext
  }) => {
    if (securityContext.categoryId) {
      query.filters.push({
        member: 'Products.categoryId',
        operator: 'equals',
        values: [securityContext.categoryId]
      });
    }
    return query;
  },
  semanticLayerSync: () => {
    return [{
      type: 'metabase',
      name: 'Metabase Demo Account',
      config: {
        url: 'https://cube-dev-partner.metabaseapp.com',
        user: 'artyom+cubeserviceaccount@cube.dev',
        password: 'qdy4FPT@xde2ehn4pqj'
      }
    }, {
      type: "preset",
      name: "fff",
      config: {
        api_token: "fff",
        api_secret: "ff",
        workspace_url: "fff"
      }
    }];
  }
};