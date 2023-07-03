import { useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Creations from './components/creations';
import Footer from './components/footer';
import Infos from './components/infos';

function App() {

  const infosCards = [
    {
      img: 'images/desktop/image-deep-earth.jpg',
      title: 'Deep earth'
    },
    {
      img: 'images/desktop/image-night-arcade.jpg',
      title: 'Night arcade'
    },
    {
      img: 'images/desktop/image-soccer-team.jpg',
      title: 'soccer team vr'
    },
    {
      img: 'images/desktop/image-grid.jpg',
      title: 'the grid'
    },
    {
      img: 'images/desktop/image-from-above.jpg',
      title: 'from up above vr'
    },
    {
      img: 'images/desktop/image-pocket-borealis.jpg',
      title: 'pocket borealis'
    },
    {
      img: 'images/desktop/image-curiosity.jpg',
      title: 'the curiosity'
    },
    {
      img: 'images/desktop/image-fisheye.jpg',
      title: 'make it fisheye'
    }
  ]

  const maisCards = [
    {
      img: 'images/desktop/image-deep-earth.jpg',
      title: 'Deep earth'
    },
    {
      img: 'images/desktop/image-night-arcade.jpg',
      title: 'Night arcade'
    },
    {
      img: 'images/desktop/image-soccer-team.jpg',
      title: 'soccer team vr'
    },
    {
      img: 'images/desktop/image-grid.jpg',
      title: 'the grid'
    },
    {
      img: 'images/desktop/image-from-above.jpg',
      title: 'from up above vr'
    },
    {
      img: 'images/desktop/image-pocket-borealis.jpg',
      title: 'pocket borealis'
    },
    {
      img: 'images/desktop/image-curiosity.jpg',
      title: 'the curiosity'
    },
    {
      img: 'images/desktop/image-fisheye.jpg',
      title: 'make it fisheye'
    }
  ]

  const [todosOsCards, setTodos] = useState(infosCards) 

  function abrirTodosOsCards () {
    setTodos([...infosCards, ...maisCards]);
  }

  const footerNav = [
    "about",
    "carrers",
    "events",
    "products",
    "support"
  ]

return ( <>
    <Banner text="Immersive experiences that deliver" />
    <Infos title="THE LEADER IN INTERACTIVE VR"
    desc="Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand."/>
    <Creations title="Our creations" mostraTodos={abrirTodosOsCards} cards={todosOsCards} />
    <Footer logo='images/logo.svg' navItens={footerNav} />
    </>);
}

export default App;
