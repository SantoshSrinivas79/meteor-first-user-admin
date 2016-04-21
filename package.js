Package.describe({
  summary: "Method to add first Meteor user to Admin Role.",
  version: "0.1.2",
  name: "apinf:first-admin",
  git: "https://github.com/apinf/meteor-first-user-admin"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.use("accounts-base", ["server"]);
  api.use("apinf:create-role-if-undefined@0.1.1", ["server"]);

  api.addFiles('server/methods/users.js', ["server"]);
	api.addFiles('server/accounts.js', ["server"]);
});
