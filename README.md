# juliangiuca.com
Can't nobody say [Strong Bad](http://homestarrunner.com/sbemail64.html) never did nothing for the peoples.

### What am I looking at?
This is a very simple pure Node webserver to serve up static HTML, and have a keep-alive for Heroku.

## Setup
Have Node. The app requires the following ENV vars
```
TARGET_URL - This is the url so the app can ping itself
PORT - What port is the service running on? (Defaults to 5000)
```

## Run
To run the site:
```
TARGET_URL=http://127.0.0.1:5000 node app.js
```

## License
MIT License.
