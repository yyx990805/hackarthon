---
sidebar_position: 1
---

# Lista multimediów

```js
const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
};

fetch('http://localhost:1337/api/multimedia-set', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```
