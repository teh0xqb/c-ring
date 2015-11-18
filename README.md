
# Ops-Ring

![Ring Preview with a lots of nodes]('https://github.com/quilesbaker/ops-ring/blob/master/docs/ring.png' "Ring of Balancing")

A small project that implements a small feature of OpsCenter for interview purposes - Cassandra Cluster Ring

## Project Url

`http://ops-ring.cf`

# Running Project

The previously built dev version is checked to repo under `www/` dir, just deploy it on a server.
You might use a dev server, like the npm package `http-server`.

Won't minify sources for now, since it might help with inspecting.

# Using the Application

You may use the dev tools/console on your browser. I have exposed a function

Sample call of this function with array format:

 ```javascript
window.opsRing.redrawNodes(["0","85070591730234615865843651857942052864"]);
 ```

If you input a number higher than 2^127, it will just print 2^127's position.
**The node won't go higher than 2^127**
If you input a number lower or equal to 0, it will assume 0.

When you click a node, it will print the node clicked, plus any other node
underneath it if the tokens are too close together.

You may also input the array contents on the textArea of the Application:

`"0","85070591730234615865843651857942052864"`

and press update to view the changes.

You may enter one token value you know is in the ring into the filter box. When you
click filter (click only for now, press enter on TODO) it will only show that node.
You may press the clear button to clear the filter and show all nodes again.

Note: You will need an internet connection to run the app. It loads a google web font.
If you don't have internet, it will take its time to try to load the font,
and then it will boot with the rest of the application running.

# Project files:

Actual dev code:
```
app
```

Dist code:
```
www
```


## Setting up the project
```
npm install
```
Also, install some global dependencies to easier build project:
```
npm install -g webpack gulp
```

## Build

The compilable assets are contained under the `app` dir. You may run these under root directory:

To compile js into one bundle/file:
```
webpack
```
^ this is important, since we only import one file into index.html, and we can `require` modules as we would in a node environment.

To process sass into css:
```
gulp styles
```

## Development

During development, you might want to have these running:
- `webpack --progress --colors --watch`, to bundle files into bundle.js for import to html
- `gulp watch`, to watch for scss/sass file changes and create the main.css file
- `node_modules/mocha/bin/mocha -w app/tests/acceptance.js -t 10000`, to run acceptance tests using selenium
- `node_modules/mocha/bin/mocha -w app/tests/unit/helpers.js`, to run unit tests

## Running unit tests
```
node_modules/mocha/bin/mocha app/tests/unit/draw-svg.js
```

## Running acceptance tests
```
node_modules/mocha/bin/mocha app/tests/acceptance.js -t 10000
```

## Dependencies

To be able to run npm install, you will need:

- `nodejs`:
 - If Ubuntu: `sudo apt-get install nodejs`
 - If Gentoo: `sudo emerge net-libs/nodejs`
 - OSX: `brew install node`, hopefully using homebrew
 - Else, go to nodejs website, and install.
- `npm`
 - Usually bundled when installing nodejs
- `webpack`: install with `npm install -g webpack`, after installing `npm`

## Tested on these browsers:

- Google Chrome - Version 46.0.2490.80 (64-bit) - Mac OSX
- Chromium - Version 47.0.2526.16 (64-bit) - Gentoo Linux
- Safari - Version 9.0.1 (11601.2.7.2)
- PhantomJs - Version 1.9.8 - Gentoo Linux

Known issues:

- Mozilla Firefox - Version 41.0.1 - Mac OSX:
 - Firefox is not V8 based, so should replace assertion mechanism. Curerntly using V8's assert in the browser. Listed as an issue on repo.

For more compatibilities by feature (svg), see the caniuse image under the `docs`
folder

#### Technologies Used:
- `D3js`
- `Susy SASS Grids`
- `Breakpoint Media queries`
- `Roboto` Font from Google
- `BigNumber` npm package
- Did **not** use jQuery. Should have used jQuery.

#### Notes

- Running under es5 environment, not using babel or es6
- Webpack has a lot of dependencies. I don't mind but you'll see a big number of components under node_modules, and might take more to install on slow internet speeds.
