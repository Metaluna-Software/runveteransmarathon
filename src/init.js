window.app = {
  env: window.config || {},
  revision: app.revision,
  consoleOut(message, verb = 'log') {
    if (app.env.DEBUG_MODE) {
      console[verb](message);
    }
  }
};
app.env.DEBUG_MODE = app.env.DEBUG_MODE && app.env.DEBUG_MODE !== 'false';
