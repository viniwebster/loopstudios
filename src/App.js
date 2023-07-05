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
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1363430/ss_55c4e439c7f0ab57a03abc5501e673877f16c2d9.1920x1080.jpg?t=1665754444',
      title: 'Cs Vr'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-pNJIG89Dg0GfRdqwXhhK3KHLjMK-KKqWI9HWd_CmQmEhMlR3JaQvi1GrDUoaMV_4mQ&usqp=CAU',
      title: 'zombie wars'
    },
    {
      img: 'https://cdn6.aptoide.com/imgs/3/5/8/3586c0294a630eb0b419faac58043715_screen.png',
      title: 'Silence'
    },
    {
      img: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
      title: 'among us'
    },
    {
      img: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg',
      title: 'minecraft'
    },
    {
      img: 'https://sm.ign.com/t/ign_br/cover/t/the-walkin/the-walking-dead-a-telltale-game-series-season-two_qsef.1200.jpg',
      title: 'the walking dead'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/937406_125868_front.jpg',
      title: 'left 4 dead'
    },
    {
      img: 'https://assets-prd.ignimgs.com/2023/06/20/battlebit-1687299370490.jpg',
      title: 'battlebit'
    },
    {
      img: 'https://filmfreeway-production-storage-01-storage.filmfreeway.com/press_kits/posters/002/008/289/original/d30d37f16a-poster.jpg?1644907548',
      title: 'phasmophobia'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/pt/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png',
      title: 'skyrim'
    },
    {
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0214/HtO3NV6Bsg6tqZCUS8zOYFz1.png',
      title: 'zenith'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/pt/e/ec/Capa_Resident_Evil_7.jpg',
      title: 'resident evil 7'
    },
    
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
