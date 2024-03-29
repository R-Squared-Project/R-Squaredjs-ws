# R-Squared Core Blockchain websocket interface (rsquared-js-ws)

Pure JavaScript R-Squared websocket library for node.js and browsers. Can be used to easily connect to and obtain data from the blockchain via public apis or local nodes.

Credit for the original implementation goes to [jcalfeee](https://github.com/jcalfee).

## Setup

This library can be obtained through npm:
```
npm install @rsquared/rsquared-js-ws
```

## Usage

Several examples are available in the /examples folder, and the tests in /test also show how to use the library.

Browser bundles are provided in /build/, for testing purposes you can access this from rawgit:

```
<script type="text/javascript" src="https://cdn.rawgit.com/R-Squared-Project/R-Squaredjs-ws/build/rsquared-js-ws.js" />
```

A variable rsquared_ws will be available in window.

For use in a webpack/browserify context, see the example below for how to open a websocket connection to the Openledger API and subscribe to any object updates:

```
var {Apis} = require("@rsquared/rsquared-js-ws");
Apis.instance("wss://localhost/ws", true).init_promise.then((res) => {
    console.log("connected to:", res[0].network);
    Apis.db.set_subscribe_callback( updateListener, true )
});

function updateListener(object) {
    console.log("set_subscribe_callback:\n", object);
}
```
The `set_subscribe_callback` callback (updateListener) will be called whenever an object on the blockchain changes or is removed. This is very powerful and can be used to listen to updates for specific accounts, assets or most anything else, as all state changes happen through object updates. Be aware though that you will receive quite a lot of data this way.

## Tests

The tests show several use cases, to run, simply type `npm run test`. The tests require a local witness node to be running, as well as an active internet connection.
