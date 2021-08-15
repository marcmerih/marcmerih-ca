# marcmerih-ca
-----------------

## About Project

This repository was created by me, Marc Atasoy, to hold the open-source code for my personal portfolio.

## Project Structure

*Coming soon*

## Project Wireframes

*Coming soon*

## Tech Stack

*Coming soon*

## Libraries

*Coming soon*

## Architecture

*Coming soon*

-----------

# Workflow & Git-source control

*For first time setup of workspace for front-end:*
  1.  Download NodeJS to your machine.
  2.  In the terminal of your editor, run `npm install -g @angular/cli`
  3.  After cloning the repository, please navigate to */app* path and run `npm install` in the terminal of your text editor/compiler.
  
 For further questions about setting up Angular / NodeJS in your local machine, please reference this video: https://www.youtube.com/watch?v=1RIXiy0v-wM


*Pushing code to the master branch:*

  1.  Create a new branch in remote repository (here).
  2.  On your local VSCODE Terminal, run `git checkout master` to enter local master branch.
  3.  To acquire any new branches created by others (and your own branch that you've just created), run `git fetch`.
  4.  To acquire latest changes merged into remote master, run `git pull origin master`.
  5.  You should only make changes to your own branches (and not the master branch). To go into your branch locally, run `git checkout *type/your-branch-name*`
  6.  Create your changes.
  7.  To stage the changes, run `git add .`.
  8.  Now you must commit these staged changes, so you must run `git commit -m "message"`, where the message is a very brief description of what is in that commit.
  9.  Now your code is ready to be pushed, so just run `git push` (alternatively, if you find yourself creating the branch in your local, terminal will prompt you to run `git push --set-upstream origin *type/your-branch-name*`, which will create and sync the same branch in the remote with your local branch).
  10. Open the github website, click on *Create and compare pull request*.
  11. Add reviewers, add a title, and a description (if there are more than 5 files changed), and click create PR!
  
-----------

  # Angular CLI File Structure
  
  
  You will notice that there are a lot of files in the repository. These files were introduced by _Angular CLI_. The sub folder we will be most interested in (and will be working with) is in _*src/app*_.
  
  There is also an _*assets*_ subfolder, which will house all images (/assets/images) we use, copydeck (/assets/i18n), documents (/assets/documents), etc.
  
  Package.json file is important to show you Angular CLI tools (such as building your application to a local server, building in production mode, building in -aot mode, etc). These are things that are not necessarily needed to be known, except for npm run start.
  
  Package-lock.json contains all dependencies that our project will be using. These are dependencies that are installed into the project, such as bootstrap, angular material, firebase, etc.
  
  styles.css is a global styling file which is sensitive, and will contain global stylings that will be sued throughout the application. Changing these files can result in many parts of the application being affected. We will have more global stylesheets added as per best practices (i.e material.css for angular material styling, variables.css for global styling variables such as colour hex codes, etc.)
  
  Please note that package & package-lock.json files will get updated if you install new dependencies (or pull changes that contain new dependencies). These files should not be manually altered.
  
  ------------
  
  
  # Running the application locally
  
  In order to see our application locally, you can build and serve it to be accessible in your localhost. In order to achieve this:

    1)  In your terminal (having navigated to */app/src/app* angular application folder), run `npm run start`.
    2)  Once you see _'Compiled Successfully'_, you will be prompted a localhost link (probably to port 4200).
    3)  Follow that link in your favourite browser, and voila!

  Side note: If you are going to be using terminal for things like git commands, do not touch the 'Compiled Sucessfully' tab. Leave that running, otherwise your servers will be stopped (and can be restarted at any point using above method). Simply open new terminal tabs as you need by clicking the new _+_ icon in VSCode (or by hitting *CTRL + Shift + ~*), and run your commands there!
  
  ------------

  # Chrome Headless for Spec Testing
  
  Install a few dependencies:
    `npm install --save-dev karma-phantomjs-launcher`, 
    `npm install --save intl`, 
    Open karma.conf.js and add require('karma-phantomjs-launcher') to the plugins array, 
    Open your src/polyfills.ts file and uncomment the following lines:
    
    import 'core-js/es6/symbol';
    import 'core-js/es6/object';
    import 'core-js/es6/function';
    import 'core-js/es6/parse-int';
    import 'core-js/es6/parse-float';
    import 'core-js/es6/number';
    import 'core-js/es6/math';
    import 'core-js/es6/string';
    import 'core-js/es6/date';
    import 'core-js/es6/array';
    import 'core-js/es6/regexp';
    import 'core-js/es6/map';
    import 'core-js/es6/weak-map';
    import 'core-js/es6/set';
    import 'intl';
    import 'intl/locale-data/jsonp/en';
    
   Change ng test in package.json to `ng test --browsers PhantomJS`
