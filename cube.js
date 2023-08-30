module.exports = {
  // Create a new appId for each table
  // https://cube.dev/docs/reference/configuration/config#contexttoappid
  contextToAppId: ({ securityContext }) => {
    return securityContext.table
  },
 
  // Enforce a default value for `table` if one is not provided in the security context
  // https://cube.dev/docs/reference/configuration/config#extendcontext
  extendContext: ({ securityContext = {} }) => {
    if (!securityContext.table) {
      securityContext.table = "ORDERS"
    }
 
    return {
      securityContext,
    };
  },
 
  // Here we create a new security context from Metabase SQL API call
  // Payload is being passed as JSON string all the way from python app through Metabase
  checkSqlAuth: (query, username) => {
    let securityContext = {}
    if (username != "cube") {
      const payload = JSON.parse(payload)
      securityContext.table = payload.table
    }
    
 
    return {
      password: process.env.CUBEJS_SQL_PASSWORD,
      securityContext: securityContext,
    };
  },

  semanticLayerSync: () => {
    return [{
      type: "metabase",
      name: "Metabase Sync",
      database: "metabase-jwt-dynamic-data-model",
      config: {
        user: process.env.METABASE_SLS_USER,
        password: process.env.METABASE_SLS_PASSWORD,
        url: process.env.METABASE_SLS_URL
      }
    }];
  }
};