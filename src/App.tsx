import { useRef, useState } from 'react'
import './App.css'

function App() {
  const prefix = import.meta.env.VITE_API_URL;
  const [text, setText] = useState("")
  const ref = useRef<HTMLAnchorElement | null>(null)
  const [disabled, setDisabled] = useState(false)

  const handleClick = () => {
    if (!text) return
    if (disabled) return
    setDisabled(true)
    const link = document.createElement('a')
    link.href = prefix + text
    link.click()
    setText("")
    setTimeout(() => {
      setDisabled(false)
    }, 120000)
  }
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <img src={"https://media.npr.org/assets/img/2015/03/07/cat_wide-5910b27269c0e63eaad0495d93005deff99d3cc7.jpg"} className="logo react" alt="React logo" />

      </div>
      <h1> ❤️ Mochify 0.0.1 ❤️</h1>
      <div className="card">
        <div style={{ display: "flex" }}>
          <input style={{ fontSize: "1.3rem" }} value={text} onChange={(e) => setText(e.target.value)} type='text' placeholder='Pone un link de yutu'></input>
          <button disabled={!text || disabled} onClick={handleClick}>
            Descargar Video
          </button>
        </div>
        <p>
          Pone un link como <code> https://www.youtube.com/watch?v=o6CRXeKUZSA </code> y clickea descargar
        </p>
      </div>

    </>
  )
}

export default App
