# MERN-listing-sample

A listing of elements (restaurants) which can be filtered/sorted.

  - no database - uses express backend to read json from file
  - initially displays restaurants in 3 states ('open'/'order ahead'/'closed')
  - restaurant can be added to favorites and those will be displayed on top
  - can be sorted by certain values (asc/desc)
  - can be filtered by search term

### Installation
requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ git clone https://github.com/oshell/MERN-listing-sample.git
$ cd MERN-listing-sample
$ npm install
$ npm start
```

### Testing

Tests can be found under ```./client/src/__tests__```. and can be
run from ```./client```. Enter watch mode with ```npm test``` and press 'a'
to run the tests.

```sh
$ cd client
$ npm test
```
