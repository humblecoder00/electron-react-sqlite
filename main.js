const { app, BrowserWindow } = require('electron')

// create window and load the index html
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

// when app is ready, create the window
app.whenReady().then(createWindow)


console.log('hi world')