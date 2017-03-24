# Todolist in React/Redux

I'm creating this App for todolist and testing React.js & Redux.


This app is a initial challenge of [React JS and Redux - Mastering Web Apps](https://www.udemy.com/react-js-and-redux-mastering-web-apps/learn/v4/overview) course.

The App manage a Todo list that store the data in cookies.

## Dev dependences

* [Create React App](https://github.com/facebookincubator/create-react-app)

## Dependences

* [React Bootstrap](https://react-bootstrap.github.io/) 
* [Moment.js](https://momentjs.com/)
* [SfCookies](https://www.npmjs.com/package/sfcookies)

## Usage

### Install

Use `npm` for install dependences:
```javascript
npm install
```

### Run 

For run application use:
```javascript
npm start
```
Look at:

```
http://localhost:3000
```

### Create Bundle

If you want create bundle use:
```javascript
npm run build
```
this script create a folder that contains all  necessary files to use app in production.

### Deploy on Heroku

If you want publish the example on Heroku, you use this git for that.

[https://github.com/mars/create-react-app-buildpack#requires](https://github.com/mars/create-react-app-buildpack#requires)

and use [this](https://github.com/mars/create-react-app-buildpack.git) buildpack for heroku.

### Visit online example on Heroku

I created a online version of this example on Heroku [https://react-music-master.herokuapp.com/](https://react-music-master.herokuapp.com/)

## Chanchanges compared to the original codege 

* The spotify api call used https instead of http, becouse heroku use only https calls

## License

This code was written entirely from [David Katz](https://www.linkedin.com/in/david-katz-sf/) course, even if changed refers entirely to his course.