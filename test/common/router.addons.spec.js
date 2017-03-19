import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
Router = FlowRouter.Router;

Tinytest.addAsync('Common - Addons - onRouteRegister basic usage', function (test, done) {
  var name = Random.id();
  var customField = Random.id();
  var pathDef = '/' + name;

  FlowRouter.onRouteRegister(function(route) {
    test.equal(route, {
      pathDef: pathDef,

      // Route.path is deprecated and will be removed in 3.0
      path: pathDef,

      name: name,
      options: {customField: customField}
    });
    FlowRouter._onRouteCallbacks = [];
    done();
  });

  FlowRouter.route(pathDef, {
    name: name,
    action() {},
    subscriptions() {},
    triggersEnter() {},
    triggersExit() {},
    customField: customField
  });
});
