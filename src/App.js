// import logo from './logo.svg';
// import './App.css';
// import Foodbox from './Components/Foodbox';
// import Search from './Components/Search';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
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
        
//       </header> */}
//       <header className="App-header">
//         Pro-Nutrition
//       </header>
//       <Search/>
//       <Foodbox/>
//     </div>
//   );
// }

// export default App;

import './App.css';
// import Foodbox from './FoodBox/FoodBoxComponent'
// import Title from './TitileBar/Title'
import Foodbox from './Components/Foodbox';

function App() {
  return (<div>
          {/* <Title /> */}
          <h1>Pro-Nutrition</h1>
          <Foodbox />
  </div>);
}

export default App;