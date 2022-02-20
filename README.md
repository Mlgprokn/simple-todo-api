# simple-todo-api
A simple todo api using node.js and mongodb with JWT Authentication.

**Setup**

To get all the requred packaged run: 

`npm install`

In order to start the API run: 

`nodemon source/server.ts`


# API Documentation
**Register**
----
  Registers a new user

* **URL**

  /api/users/register

* **Method:**

  `POST`

* **Data Params**

  `username=[string]`
  `password=[string]`

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal error" }`

* **Sample Call:**

  ```javascript
    axios.post('/api/users/register', {
      username: 'admin',
      password: 'password'
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  ```
  
**Login**
----
  Logs in a user in the system

* **URL**

  /api/users/login

* **Method:**

  `POST`

* **Data Params**

  `username=[string]`
  `password=[string]`

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal error" }`

* **Sample Call:**

  ```javascript
    axios.post('/api/users/login', {
      username: 'admin',
      password: 'password'
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  ```

**Get all Todos**
----
  Gets all todos

* **URL**

  /api/todos/get

* **Method:**

  `GET`

* **Data Params**

  `None`

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Unauthorized" }`
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal error" }`

* **Sample Call:**

  ```javascript
    axios.get('/api/todos/get')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  ```
  
**Create a new Todo**
----
  Creates a new Todo

* **URL**

  /api/todos/create

* **Method:**

  `POST`

* **Data Params**

  `title=[string]`

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Unauthorized" }`
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal error" }`

* **Sample Call:**

  ```javascript
    axios.post('/api/todos/create' {
      title: 'Learn Node.js'
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  ```
 
**Update an exsisting Todo**
----
  Updates an exsisting Todo

* **URL**

  /api/todos/update

* **Method:**

  `PATCH`

* **Data Params**

  `_id=[string]`
  `title=[string]`
  `isCompleted=[boolean]` 

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Record not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Unauthorized" }`
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal error" }`

* **Sample Call:**

  ```javascript
    axios.post('/api/todos/update' {
      _id: 'id',
      title: 'Updated title',
      isCompleted: true
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  ```

**Delete a Todo**
----
  Delete a Todo

* **URL**

  /api/todos/delete

* **Method:**

  `DELETE+`

* **Data Params**

  `_id=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ todo : { _id: "example", title: "Updated title", isCompleted: true } }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Record not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Unauthorized" }`
  
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ error : "Internal error" }`

* **Sample Call:**

  ```javascript
    axios.post('/api/todos/delete' {
      _id: '_id'
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  ```
