import './App.css';

const templates = [{
  tempId: 1,
  tempImage: null
},
{
  tempId: 2,
  tempImage: null
},
{
  tempId: 3,
  tempImage: null
},
{
  tempId: 4,
  tempImage: null
}
];


function App() {
  return (
    <div className="appContainer">
      <section className="info">
        <h1>Choose Template below</h1>
      </section>
      <section className="all-templates">
        {
          templates.map((temp)=>{
            return(
              <div className="template" key={temp.tempId}>
                <div></div>
                <span><a href="./templates/template2.js">Use this template</a></span>
              </div>
            );
          })
        }
      </section>
    </div>
  );
}

export default App;