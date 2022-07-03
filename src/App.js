import './App.scss';
import data from "./assets/data.json"
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className='container'>
      <Header/>
      <main className='main'>
        {data.map((section, index) => {
          return(
            <Section section={section} key={index}/>
          )
        })}
      </main>
    </div>
  );
}

export default App;
