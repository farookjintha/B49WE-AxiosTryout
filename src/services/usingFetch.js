const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  return data;
};

export const getUserById = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const data = await response.json();
  return data;
};

// Payload
// {
//     name: 'John',
//     email: 'john@gmail.com'
// }

// JSON.stringify

// "{name: 'John', email:'john@gmail.com'}"

// JSON.parse();

// {
//     name: 'John',
//     email: 'john@gmail.com'
// }

export const addUser = async (payload) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data;
};

export const updateUserById = async (userId, payload) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data;
};

export const deleteUserById = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

// we are using normal / named export because we have multiple functions to be exported. So default export is not an ideal one.

// fetch;
// GET => fetch(url);

// POST => fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(payload)
// })

// PUT => fetch(url, {
//     method: 'PUT',
//     body: JSON.stringify(payload)
// })

// DELETE => fetch(url, {
//     method: 'DELETE'
// })
