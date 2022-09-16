---
sidebar_position: 1
---

# Lista eksponatów

```sh
export token='abcdeadbeef' # api pozyskane z konta
curl --request GET \
  --url http://localhost:1337/api/objects \
  --header 'Authorization: Bearer '$token''
```

```js
const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`
  }
};

fetch('http://localhost:1337/api/objects', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

export const Layout = ({children, color}) => {
  const [url, setUrl] = React.useState('http://localhost:1337/api/objects')
  const [data, setData] = React.useState()
  return (<div className="flex border-solid border-2">
    <div>
      <fieldset>
        <input value={url} onChange={ev => setUrl(ev.target.value)}/>
        <button onClick={() => fetch(`${url}`).then(r => r.text()).then(setData).catch(e => setData('error'))}>wczytaj</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </fieldset>
    </div>
  </div>);
}

<Layout/>