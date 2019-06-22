# DEV React-Native-Apollo Starter App

**NOTE: Update the title and provide a description here for your new project once started**

This is a repository with starter code for new frontend mobile projects at DEV.

## Starting a New Project

**NOTE: Delete this section in the README once you have started the new project**

Run these commands to start a new project built off of this repository.

```bash
$ git clone https://github.com/hsadev/react-frontend-starter.git <YOUR_PROJECT_NAME> && cd <YOUR_PROJECT_NAME> # clone repo
$ rm -rf .git # delete original git history
$ git init # create new git repository
$ git remote add origin <YOUR_PROJECT_GIT_REPOSITORY> # add remote for github repo
```

## Project Structure

The repo was built by the general frontend mobile file structure conventions we use at DEV. It has react-router, apollo-client, and ThemeProvider from styled-components set up in src/App.js. It also has a full devloper environment with prettier, eslint, and travis set up.

This repository was designed first and foremost to scale to large projects. It should be easy to extend the base file structure and setup here to much larger projects.

## Set up

To install all js dependecies run:

```bash
$ npm i
```

To link the react-native dependecies for iOS and android:

```bash
$ react-native link
```

## Running

To run iOS:

```bash
$ react-native run-ios
```
