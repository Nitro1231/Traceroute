// https://github.com/electron/electron/issues/9920#issuecomment-575839738
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  send: (channel, data) => {
    console.log(`api.send: ${channel}`)
    // whitelist channels
    let validChannels = ["send-test-event"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    console.log(`api.receive: ${channel}`)
    let validChannels = ["receive-test-event"];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
