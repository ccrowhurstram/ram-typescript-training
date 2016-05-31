# Overview

> The (in)complete workshop for picking up TypeScript.

## Getting started

1. Follow the install instructions
2. If you're new to Visual Studio Code, read the section below *'Visual Studio code integration'*
3. Work through the [training materials](training-guide.md)

## Install instructions

0. Remove old version of Typescript (only applies to machines with Visual Studio installed)
    1. Browse to folder: C:\Program Files (x86)\Microsoft SDKs\TypeScript
    2. Delete any folder with a version number < 2.0 (eg 1.0)
1. Install global tooling:
    1. git
    2. nodejs and npm
    3. [Visual Studio Code](https://code.visualstudio.com/Download)
    3. typescript: `npm install -g typescript@1.9.0-dev.20160409`
    4. typings: `npm install -g typings`
2. fork this repo
3. clone the forked repo locally
4. open a cmd prompt with the current directory set to the locally cloned directory
4. at this command prompt install project locally: `npm install`
    * installs both npm modules and any referenced typescript definition files
    * uses the exact versions of npm modules as defined in npm-shrinkwrap.json


## Running project

**Compile typescript and launch web server** 

`npm start`

* runs the `tsc` tool using the options defined in the `tsconfig.json`
* `tsc` is configured to watch for changes to your typescript files and recompile them
* lauches `index.html` in the browser at http://localhost:3000/

**Compile typescript only**

`tsc`

**Compile typescript when files change**

`tsc -w`


## Visual Studio code integration

**Compiling**

The task runner has been configured to run the typescript compiler using the shortcut keys: 

`CTLR+SHIFT+B`

This is equivalent as running `tsc` at the command line

**Debugging**

VSC has been configured to launch a debugger and run the code in main.ts. Press the shortcut key: `F5`

However, you will find that before you can debug the code you will need to ensure that typescript compiles the code into a module format understood by nodejs ie `CommonJS` module format. To do this:

1. Open the `tsconfig.json` file
2. Change `"module": "system"` -> `"module": "commonjs"`
3. Recompile the code (tip: `CTLR+SHIFT+B`)
