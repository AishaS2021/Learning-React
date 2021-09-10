import './App.css';
import test from "./test.json";

function App() {
  return (
    <div className="App">
    <header className = "header1"> 
      Mypage
      </header>
      <body>
      {
        test.map(
          ({Title, description})=>(
            <div>
              <div>
                {Title}
              </div>  
                {description}
              </div>
              ))
      }
      </body>
    </div>
  
  )
}

export default App;
