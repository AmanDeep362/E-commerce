import React from 'react'
import Header from './components/main/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Body from './components/main/body';
import Footer from './components/main/Footer';
class App extends React.Component{
  render(){
    return(
      <>
       <Header />
        <Body />
         <hr />
        <Footer />
      </>
    );
  }
}
export default App;
// import React from 'react'

// class App extends React.Component{
//   render(){
//     return(
//       <>
//        hello
//       </>
//     );
//   }
// }
// export default App;
