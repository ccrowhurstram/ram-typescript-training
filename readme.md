## Install instructions

0. Remove old version of Typescript (only applies to machines with Visual Studio installed)
    1. Browse to folder: C:\Program Files (x86)\Microsoft SDKs\TypeScript
    2. Delete any folder with a version number < 2.0 (eg 1.0)
1. Install global tooling:
    1. git
    2. nodejs and npm
    3. typescript: `npm install -g typescript@1.9.0-dev.20160409`
    4. typings: `npm install -g typings`
2. fork this repo
3. clone the forked repo locally
4. open a cmd prompt with the current directory set the locally cloned directory
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

The task runner has been configured to run the typescript compiler using the shortcut keys: 

`CTLR+SHIFT+B`

This is equivalent as running `tsc` at the command line
