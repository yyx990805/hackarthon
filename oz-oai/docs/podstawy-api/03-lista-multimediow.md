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

fetch('https://apihackaton.zacheta.art.pl/api/v1/multimedia', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

export const Layout = ({children, color}) => {
  const [url, setUrl] = React.useState('https://apihackaton.zacheta.art.pl/api/v1/multimedia')
  const [token, setToken] = React.useState(() => localStorage.getItem('token'))
  const [data, setData] = React.useState()
  return (<div className="flex border-solid border-2">
    <div>
      <fieldset>
        <input value={url} onChange={ev => setUrl(ev.target.value)}/>
        <br/>
        <input value={token} onChange={ev => {
          localStorage.setItem('token', ev.target.value)
          setToken(ev.target.value)
        }} placeholder="Token"/>
        <br/>
        <button onClick={() => fetch(`${url}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }}).then(r => r.json()).then(setData).catch(e => setData('error'))}>wczytaj</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </fieldset>
    </div>
  </div>);
}

import BrowserOnly from '@docusaurus/BrowserOnly';

<BrowserOnly>
  {() => <Layout/>}
</BrowserOnly>
