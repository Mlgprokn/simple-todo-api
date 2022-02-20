# simple-todo-api
A simple todo api using node.js and mongodb with JWT Authentication.


# API Documentation
**Register**
----
  Registers a new user

* **URL**

  /api/users/register

* **Method:**

  `POST`
  
*  **URL Params**

  `None`

* **Data Params**

  'username=[string]'
  'password=[string]'

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  ```javascript
    axios.post('/register', {
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
