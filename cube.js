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
        type: 'preset',
        config: {
          api_secret: 'b91859e67b3bf056e2329820002c556a0a43861502e88af66a608e936006de34',
          workspace_slug: 'e5ae36b9',
          api_token: '94b5d1d0-2752-472c-8b9b-d724931bc0fc',
          workspace_region: 'us1a'
        }
      }
    ]
  }
};