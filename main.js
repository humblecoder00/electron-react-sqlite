// Main process
const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')
const isDev = !app.isPackaged // check if in dev or prod env

// create window and load the index html
function createWindow() {
    // Renderer process
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            // will sanitize JS code to be safe
            worldSafeExecuteJavascript: true,
            // is a feature that ensures that both your
            // preload scripts and Electron's internal logic tunes in seperate context:
            contextIsolation: true,
        }
    })

    win.loadFile('index.html')
    isDev && win.webContents.openDevTools()
}

// use electron reload in dev env
if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

// when app is ready, create the window
app.whenReady()
    .then(() => {
        createWindow();
        // const notification = new Notification({ title: 'Hello world', body: 'My test message' })
        // notification.show()
    })

// callback method for main process
app.on('window-all-closed', () => {
    // if on windows and close the window, stop the app
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// Webpack -> is a module builder, main purpose is to bundle JS files for usage in the browser.
// Babel -> is a JS compiler

console.log('hi world')