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
};