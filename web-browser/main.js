const config = require("./config");
const { app, BrowserWindow } = require("electron");

const url = config.start_url;

const createWindow = (width, height) => {
  const properties = {
    width: width,
    height: height,

    webPreferences: {
      nodeIntegration: false,
      allowRunningInsecureContent: true
    }
  };

  const win = new BrowserWindow(properties);

  win.loadURL(url);
};

const main = () => {
  const width = config.window.width;
  const height = config.window.height;

  createWindow(width, height);
};

app.on("ready", main);
