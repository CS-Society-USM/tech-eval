import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Applicants!</h1>

    <h3>Hi. I am Lim Wen Hao from Year 1 Sem 1, student of School of Computer Science.</h3>
    <p>To know about me, here is my portfolio. 👇</p>
    <p><a href="https://wenhao1223.github.io/WenHao1223" target="_blank">Self-coded Portfolio</a></p>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Make any changes on html, then create pull request.
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
