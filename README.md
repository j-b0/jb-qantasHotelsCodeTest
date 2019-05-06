# JB | Qantas Hotels Code Test

A code test produced for Qantas Hotels.

[![JB | Qantas Hotels Code Test](https://j-b.io/qantas-readme.jpg)](https://jb-qantashotelscodetest.netlify.com/)

## Getting Started

### Prerequisites

The following pieces of software need to be installed before proceeding.

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installation

Using you preferred CLI (mine is [hyper](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)!) proceed using the below steps.

```
git clone https://github.com/j-b0/jb-qantasHotelsCodeTest
```

```
npm install
```

```
npm start
```

_This will build the react app. You can preview this in your browser on [http://localhost:8000/](http://localhost:8000/)_

### Test

To run the relevant unit tests set up for the app, enter the following into terminal;

```
npm run test
```

_This will run a series of tests respective to the order functionality_

## Tech

Based on the open brief provided by Qantas Hotels I have chosen the below tech;

**Node.js** _(Back-end Functionality)_ + **React** _(Templating)_ + **Gatsby.js** _Static site generator/framework_ + **Heroku** _(Hosting)_

## Main Files

- [src/funcs/order.js](https://github.com/j-b0/jb-qantasHotelsCodeTest/blob/master/src/funcs/order.js) & [src/funcs/order.test.js](https://github.com/j-b0/jb-qantasHotelsCodeTest/blob/master/src/funcs/order.test.js) _Handles the order functionality and unit testing of order functionality, respecitvely_,
- [src/components/hotel.js](https://github.com/j-b0/jb-qantasHotelsCodeTest/blob/master/src/componentes/hotel.js) _Handles the output of the hotel infomation_,

## Items to note

- I noticed a couple of differentials between the mock-up and JSON provided;
  - "The courtyard by marriott" has a black square next to free cancellations in the mockup. However, there is nothing in the JSON to indicate why,
  - "Primus Hotel" does not have free cancellations in the mockup but does in the JSON.

_Please be aware I did not alter the JSON to reflect these differences._
