import './App.css';


import { Navbar } from './Navbar/Navbar';
import { Itemlistcontainer } from './itemlistcontainer/itemlistcontainer';

export const App = () => {

  return (

    <>
      <Navbar nombre= {"Bombas Centrifugas"}/>
      <Itemlistcontainer greeting={3}/>

    </>
   
  )

}