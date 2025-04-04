import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://staging.botcity.dev:8050/',
  realm: 'fe-test',
  clientId: 'test',
});

export { keycloak };
