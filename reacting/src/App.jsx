import Card  from "./Card";

function App(){
  return (
    <>
    <h1 className="title">This is my first component! {Math.floor(Math.random()*1000)}</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, accusantium.</p>
    <Card />
    <Card />


    </>
  )
 
}

export default App;