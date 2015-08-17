### Maintainable JavaScript

#### Get started

First checkout the code:

```sh
git clone git@github.com:jiaxie/testable-javascript-training.git
```

and initialize the environment:

```sh
cd tw-testable-javascript
npm install
bower install
```

once the installation is finished, you should make sure the backend service is working as expected:

```sh
curl http://locations-backend.herokuapp.com/locations
```

Note that you can perform a serach by city name, like:

```sh
curl http://locations-backend.herokuapp.com/locations?location=Melbourne
```

will return all locations that are contain `Melbourne`.

#### Run Tests

If you want to run tests, you can run by karma:
```sh
karma start
```

