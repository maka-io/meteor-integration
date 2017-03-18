import { Meteor } from 'meteor/meteor';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if (Meteor.isClient) {
  checkNpmVersions(
    {
      'apollo-client': '^1.0.0-rc.3',
    },
    'apollo'
  );
} else {
  checkNpmVersions(
    {
      'graphql-server-express': '^0.6.0',
      'body-parser': '^1.15.2',
      express: '^4.14.0',
      graphql: '^0.9.0',
      'graphql-subscriptions': '^0.3.1',
      'graphql-tools': '^0.10.0',
      'subscriptions-transport-ws': '^0.5.5-alpha.0',
    },
    'apollo'
  );
}
