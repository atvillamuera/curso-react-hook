import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'
// import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { FocusScreen } from './04-useRef/focusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import './08-useReducer/intro-reducer'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
  // </StrictMode>,
)
