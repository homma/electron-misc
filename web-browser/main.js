const config = require("./config");
const { app, BrowserView, BrowserWindow } = require("electron");

const url = config.start_url;

const createWindow = () => {
  const properties = {
    x: 0,
    y: 0,
    width: config.window.width,
    height: config.window.height
  };

  const win = new BrowserWindow(properties);

  // const tb = createToolbar(win);
  const br1 = createBrowser(win);

  return win;
};

const createToolbar = win => {
  const properties = {
    x: 0,
    y: 0,
    height: 100,
    width: config.window.width
  };

  const view = new BrowserView(properties);

  win.setBrowserView(view);
  view.setBounds({x:0, y:0, width: 1000, height: 100});
  return view;
};

const createBrowser = win => {
  const properties = {
    webPreferences: {
      nodeIntegration: false,
      allowRunningInsecureContent: true
    }
  };

  const view = new BrowserView(properties);

  // cannot have multipel browser view
  win.setBrowserView(view);
  view.setBounds({x:0, y:0, width: 1000, height: 800});
  view.webContents.loadURL(url);

  return view;
};

const main = () => {
  createWindow();
};

app.on("ready", main);
