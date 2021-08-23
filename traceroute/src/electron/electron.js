const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

const Traceroute = require("nodejs-traceroute");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1500,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"), // use a preload script
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

let tracerouteList = {};
tracerouteList["Destinations"] = {};

ipcMain.on("doTraceroute", (event, destination) => {
  if (destination in tracerouteList["Destinations"]) {
    console.log("[Traceroute] The job is already in progress.");
  } else {
    tracerouteList["Destinations"][destination] = true;
    win.webContents.send("returnTraceroute", {
      Destination: destination,
      hop: null,
    });
    console.log(
      `[Traceroute] Traceroute event triggered. (Destination: ${destination}).`
    );
    try {
      const tracer = new Traceroute();
      tracer
        .on("pid", (pid) => {
          console.log(`[Traceroute] PID: ${pid}`);
        })
        .on("destination", (destination) => {
          console.log(`[Traceroute] Destination: ${destination}`);
        })
        .on("hop", (hop) => {
          const data = {
            Destination: destination,
            hop: JSON.stringify(hop),
          }
          console.log(`[Traceroute] hop: ${data}`);
          win.webContents.send("returnTraceroute", data);
        })
        .on("close", (code) => {
          console.log(`[Traceroute] Job terminated: Code ${code}`);
          delete tracerouteList["Destinations"][destination]
        });
      tracer.trace(destination);
    } catch (ex) {
      console.log(ex);
    }
  }
});
