// import logo from "./logo.svg";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100 p-3">
      <div className="row w-100">
        <div className="col bg-warning text-center p-3 text-white">Nooshin</div>
        <div className="col bg-danger text-center p-3 text-white ">Fati</div>
        <div className="col bg-info text-center p-3 text-white">Neda</div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="grid  grid-cols-3 gap-8 w-full px-3">
          <div className="bg-red-900 text-center p-3 text-white">Tailwind</div>
          <div className="bg-emerald-700 text-center p-3 text-2xl text-white">
            Grid
          </div>
          <div className="bg-lime-700 text-center p-3 text-white">Display</div>
          <div className="bg-red-900 text-center p-3 text-white">Tailwind</div>
          <div className="bg-emerald-700 text-center p-3 text-2xl text-white">
            Grid
          </div>
          <div className="bg-lime-700 text-center p-3 text-white">Display</div>
        </div>
      </div>
    </div>
    // <div class="container">
    //   <div class="row justify-content-md-center ">
    //     <div class="col col-lg-2 bg-primary">1 of 3</div>
    //     <div class="col-md-auto bp-secondary">Variable width content</div>
    //     <div class="col col-lg-2 bg-primary">3 of 3</div>
    //   </div>
    //   <div class="row">
    //     <div class="col bg-primary">1 of 3</div>
    //     <div class="col-md-auto bg-secondary">Variable width content</div>
    //     <div class="col col-lg-2 bg-primary">3 of 3</div>
    //   </div>
    //   <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
    //     <div className="bg-primary-500">nooshin</div>
    //     <div class="col-start-3">fati</div>
    //     <div>navid</div>
    //     <div>khedri</div>
    //     <div class="row-start-1 col-start-2 col-span-2">Ahmad</div>
    //   </div>
    // </div>
    // <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
    //   <h1 className="text-5xl text-white">Hello Tailwind 👋</h1>
    //   <p className="text-gray-400 mt-5 text-lg">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
    //     consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
    //     eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
    //   </p>
    //   <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
    //     Hello Friends 🚀
    //   </button>
    //   <button class="p-4 bg-primary">Bootstap</button>
    // </div>
  );

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
}

export default App;
