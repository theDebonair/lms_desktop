const { app, BrowserWindow } = require('electron')

const gotTheLock = app.requestSingleInstanceLock()


if (!gotTheLock) app.quit()

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/icon.ico'
    })

    win.removeMenu()
    win.loadURL("https://lmsapp.pythonanywhere.com/")
}

app.whenReady().then(() => {
    createWindow()

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})