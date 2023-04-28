module.exports = {
  queryRewrite: (query, { securityContext }) => {
    if (securityContext.categoryId) {
      query.filters.push({
        member: 'Products.categoryId',
        operator: 'equals',
        values: [securityContext.categoryId],
      });
    }
    return query;
  },
  semanticLayerSync: () => {
    return [
      {
        type: 'metabase',
        config: {
          url: 'https://cube-dev-partner.metabaseapp.com',
          user: 'artyom+cubeserviceaccount@cube.dev',
          password: 'qdy4FPT@xde2ehn4pqj'
        }
      }
    ]
  }
};