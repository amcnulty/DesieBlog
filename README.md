# DesieBlog #
A blog site for books, travel, wine and more!

## Development Guide ##
The following is a guide to running this application locally and how to develop new features and pages.

### Overview of Technologies ###
Here is a brief list of some of the technologies used in building this site.
* ReactJS
* NodeJS
  * Express server
* Express-session
* Bcrypt
* MongoDB
  * Mongoose (ORM)
* Bootstrap 4
  * Reactstrap
* Sass css preprocessor
* DraftJS
* Heroku
* Cloudinary CDN

## Getting Started ##
If you plan on submitting code changes to this repository please ***fork this repo and submit pull requests***. For more information on forking a branch visit [Fork a repo - GitHub Help.](https://help.github.com/en/articles/fork-a-repo "Fork a repo - GitHub Help")

If you simply want to try running the code locally you can also clone this repo with the following command.
```
$ git clone https://github.com/amcnulty/DesieBlog
```

Once you have cloned this repo (or your forked version) download the necessary dependencies for both the React front end and the NodeJS backend. To do this you will have to run ```$ npm install``` from both the root of the directory and from within the /client directory. The application has been designed to allow the server and the client to be run independently of eachother on separate ports while developing locally. I will step through both of these in the following sections which will focus on getting the server and the client running locally.

### Setting Up The Server ###

#### Install Dependencies ####
Make sure you are at the root directory of the project ( *path/to/myProject/DesieBlog/* ) and run:
```
$ npm install
```

#### Create .env File ####
Included in the repo is a file named *example.env* which is an example of the *.env* file that you **need to create locally to start the server!** The .env file is part of .gitignore so it will not be included in commits once created. Create a blank .env file at the root directory.

|Key          |Type       |Description|
| ------------|-----------|-----------|
|DB_URI  |URI String |This is used to connect to your mongo database.|
|secretKey    |String     |Any random string that will be used for hashing passwords to the database.|
|NODE_ENV     |String 'development' or 'production'|This must be set to 'development' when working locally. This is set to production for the live version.|
|PORT         |Number     |The port on which to run the server. This should be set to something other than 3000. 3005 is a good option!|

Your .env file should look something like this once created.
```
DB_URI=mongodb://localhost:27017/desieblog
secretKey=my random string of text
NODE_ENV=development
PORT=3005
```
#### Start The Server ####
Once dependencies have been installed and a .env file has been created the server can be started with the following command:
```
$ npm start
```

***Note: At this time if you do not have a mongodb instance running to connect to the server will not be connected to any database.***

### Connecting To Local MongoDB Instance ###
For more information on setting up a local instance of MongoDB on your computer check out [Install MongoDB Community Edition on Windows.](https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/ "Install MongoDB Community Edition on Windows - MongoDB Manual")

### Setting Up The Client ###

#### Install Dependencies ####
Make sure you are at the */DesieBlog/client/* directory and run:
```
$ npm install
```

#### Start The Client ####
While you are in the */DesieBlog/client/* directory run:
```
$ npm start
```
This will launch the client on *localhost:3000* and should automatically open a web browser.

### Building Both Client and Server ###
To run a complete build of the client and server go to the root directory of the project and run:
```
$ npm run build-run
```
This will execute a client build followed by a server deploy. If successful the application should be able to be viewed at *localhost:3005*. This is helpful to ensure the client is building properly and to see everything running on the same port.

***Note: It is preferable to have the client and server running separately on different ports while developing to avoid how long it takes the client to do a build. This will save time when making front end changes on the client.***

## Creating New Pages ##
All existing pages are organized as a folder in the */client/src/routes/* directory.

#### Create New Folder For Page Component ####
To create a new page first create a folder with the name of the page and create a component for rendering the page.

#### Update The Router ####
The router is located in the */client/src/App.js* file. Import the newly created component and add it to the router. If this page is part of the main app and not the CMS dashboard add it under the div with the classname **"App"**. If this page is for the CMS dashboard add it to the div with the classname **"appDashboard".**

## Creating New Components ##
A collection of all resuable components that are not specifically used to render a page route are located at */client/src/components/.*

#### Create Folder For Component ####
Create a new folder with the name of the component inside the */client/src/components/* directory.

#### Add Component Files ####
All components are using .js file extensions (at this time we are not using Typescript). And the styles for each component are using .sass file extensions.

## Sass / Variables / Namespacing ##
The application is using .sass style syntax for css pre-processing. When the application is built CSS files are generated at build time.

#### The _variables.sass File ####
This file which is located at */client/src/sass/_variables.sass* is where are sass variables are stored for things like colors, global margins/padding, and font sizes. To use the variables in this file from a new component add an import statement in the sass file of the new component. Here is an example.
```sass
@import "../../sass/variables";
```

#### Namespace Convention ####
All components are wrapped in a div with a classname that matches the exported name of the component. Similarly in the each component's .sass file all style rules should be wrapped in that classname. Here is an example with a component called ArticleThumbnail

```jsx
// articleThumbnail.js

return (
  <div className="ArticleThumbnail">
    <div className="thumbnailLink">...</div>
  </div>
)
```
```sass
// articleThumbnail.sass

.ArticleThumbnail
  .thumbnailLink
    color: blue
    ...
```

## Adding Static Resources ##
Static resources such as images can be added to the application under the */client/public/res/images* folder. This will make them available to components within the sass and js files.

#### Example ####
Lets say we added a new image at the path */client/public/res/images/newImage.png*. To access the new image in either the JSX of the .js file or the .sass component file you would provide the path */res/images/newImage.png*.

```jsx
// .js file

return (
  <div className="MyComponent">
    <img src="/res/images/newImage.png" />
    <div className="imageContainer"></div>
  </div>
)
```

```sass
// .sass file

.MyComponent
  .imageContainer
    background-image: url("/res/images/newImage.png")

```
---
### Credits ###

Author:&emsp;&emsp;&emsp;&emsp;Aaron Michael McNulty