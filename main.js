// Main process
const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = !app.isPackaged // check if in dev or prod env

let installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS;

// create window and load the index html
function createWindow() {
    // Renderer process
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            // as a best practice + safety, nodeIntegration should be false
            // this keeps the renderer thread having direct access to Node
            nodeIntegration: false,
            // will sanitize JS code to be safe
            worldSafeExecuteJavascript: true,
            // is a feature that ensures that both your
            // preload scripts and Electron's internal logic tunes in seperate context:
            contextIsolation: true,
            // preload script exposes the parts needed for renderer from main thread:
            preload: path.join(__dirname, 'preload.js')
        },
    })

    win.loadFile('index.html')
    // if in development, trigger inspect view on boot
    isDev && win.webContents.openDevTools()
}

// use electron reload in dev env
if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })

    const devTools = require("electron-devtools-installer")
    installExtension = devTools.default
    REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS
    REDUX_DEVTOOLS = devTools.REDUX_DEVTOOLS
}

// when app is ready, create the window
app.whenReady()
    .then(() => {
        // IMPORTANT! Initialize server before creating window
        // Otherwise your IPC handlers won't be recognized on production version
        require('./server/boot')

        // Create the window:
        createWindow();

        // Initialize React & Redux devtools for dev environment
        if (isDev) {
            installExtension(REACT_DEVELOPER_TOOLS)
              .then(name => console.log(`Added Extension:  ${name}`))
              .catch(error => console.log(`An error occurred: , ${error}`));
      
          installExtension(REDUX_DEVTOOLS)
              .then(name => console.log(`Added Extension:  ${name}`))
              .catch(error => console.log(`An error occurred: , ${error}`));
          }
        })

// callback method for main process
app.on('window-all-closed', () => {
    // if on windows and close the window, stop the app
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

