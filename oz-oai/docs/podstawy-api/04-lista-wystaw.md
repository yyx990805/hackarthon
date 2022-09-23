---
sidebar_position: 1
---

# Lista wystaw

export const Layout = ({children, color, window}) => {
  const [url, setUrl] = React.useState('https://apihackaton.zacheta.art.pl/api/v1/exhibition')
  const [token, setToken] = React.useState(() => window?.localStorage.getItem('token'))
  const [data, setData] = React.useState()
  return (<div className="flex border-solid border-2">
    <div>
      <fieldset>
        <input value={url} onChange={ev => setUrl(ev.target.value)}/>
        <br/>
        <input value={token} onChange={ev => {
          window?.localStorage.setItem('token', ev.target.value)
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

## Filtrowanie
