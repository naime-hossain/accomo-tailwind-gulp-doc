# Folder Structure

Accomo file structure is layout/demo based. Each layout folder is complete project. Consisting of `src` & `dist` folders. You will make your style & javascript customization in `src` folder. Everything in `dist` will be generated from `src`.

| Directory/File | Description      |
| :------------- | :--------------- |
| `index.html`   | Layout directory |

## Build Files

| Build    |                                                                                            |
| :------------- | :----------------------------------------------------------------------------------------- |
| `build-tools`  | Directory for build HTML & CSS .                                                                |
| `gulp`         | Gulp compilation, copy, compress tasks for Js, SCSS, fonts and images.                     |
| `node_modules` | Source files of Plugins & packages. This directory will be created by running npm install. |
| `gulpfile.js`  | Main gulp file for running gulp tasks.                                                     |
| `package.json` | Package manager configuration file.                                                        |

## Source files

| Source files              |                                                                   |
| :------------------------ | :---------------------------------------------------------------- |
| `src`                     | Source SCSS, Js, image, font files are located in this directory. |
| `img`                     | Directory for images.                                             |
| `js`                      | Directory for javascript files.                                   |
| `plugins` js\*            | Js files for Accomo's Plugins.                                    |
| `scss`(inside css folder) | Directory for SCSS files.                                         |
| `app` scss\*              | root                                                              |
| `plugins` scss\*          | Custom style files for plugins.                                   |

## Distributed files

| Source files |                                                   |
| :----------- | :------------------------------------------------ |
| `dist`       | Distribution directory.                           |
| `css`        | Compiled css files are located in this directory. |
| `js`         | Compiled js files are located in this config.     |
