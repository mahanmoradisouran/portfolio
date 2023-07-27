import './App.sass';
import Terminal from './components/Terminal/Terminal';

function App() {
  return (
    <>
      <main>
        <div className='container'>

          <div className='title'>
            <h1>Type
              <span className='clickable'>'help'</span>
              or click
              <span className='clickable'> here </span>
              to show avilable
              <span className='marked'> commands</span>.
            </h1>
          </div>

          <Terminal />
        </div>
      </main>
    </>
  )
}

export default App
