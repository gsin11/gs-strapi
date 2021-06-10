module.exports = ({ env }) => ({
  endpoint: env("GRAPHQL_URI"),
  tracing: false,
  shadowCRUD: true,
  playgroundAlways: true,
  depthLimit: 7,
  amountLimit: 100,
});
