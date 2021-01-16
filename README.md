# A boilerplate for Electron + React + Redux with SQLite database

## Tech stack:

- Electron
- React
- Redux
- Webpack
- ForrestJS hooks
- Sequelize
- SQLite

## Dev:

- React-styleguidist for developing React components in isolation.
- React & Redux devtools.
- Electron Builder for deployment.

## Commands:

### `npm run start`

Runs the app in the development mode.
Make sure to run the app along with a second terminal running `npm run watch` command (Webpack)

### `npm run watch`

Webpack command for dev environment, targets `electron-renderer`

### `npm run styleguide`

Runs the React styleguide server.
Make sure to run the styleguide along with a second terminal running `npm run watch-style` command (Webpack)
Note: Currently styleguide does not support hot-reloading in this non-CRA setup.
It needs a better config on Webpack. For now, it still works without hot-reload.

### `npm run watch-style`

Webpack command for react-styleguide environment, targets `web`

### `npm run make:win`

Packs the app for Windows environment.
You will find the package installer file inside `dist` folder: `yourAppName Setup 1.0.0.exe`

### `npm run make:linux`

Packs the app for Linux environment.

### `npm run make:macos`

Packs the app for macOS environment.

## Project structure

```bash
├── server # contains back-end related code: IPC route handler, Sequelize, SQLite
│   ├── features                  # contains backend business logic per functionality (routes)
│   ├── lib                       # contains utility functions used in back-end
│   ├── services                  # contains backend operation logic (handling IPC, connecting to SQLite, etc.)
│   ├── boot.js                   # main file for backend orchestration using ForrestJS hooks
├── src/js # contains front-end related code: React & Redux
│   ├── components                # contains common React components used overall the front-end
│   ├── features                  # contains feature based Redux only logic
│   ├── lib                       # contains utility functions used in front-end
│   ├── pages                     # contains container and components for each page
│   ├── resources                 # contains resource files (images, json files, etc.)
│   ├── App.js                    # React App.js
│   ├── app.reducer.js            # main reducer file that puts all reducers together (no need to modify)
│   ├── app.state.js              # main redux state file - import your redux features here to initialize them.
│   ├── index.js                  # top level orchestration file for React & Redux
│   ├── styleguide.config.js      # import your styleguide components here to work on isolation
├── index.html                  # Electron renderer thread entry point
├── main.js                     # main file for Electron main thread orchestration
├── preload.js                  # preload script exposes the parts needed for renderer from main thread
├── webpack.common.js           # webpack config for development environment
├── webpack.prod.js             # webpack config for production environment
└── webpack.styleguide.js       # webpack config for running react-styleguide
```
