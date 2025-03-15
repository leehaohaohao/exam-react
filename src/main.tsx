import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArtText from "./components/ArtText.tsx";
import Meteor from "./components/Meteor.tsx";
import EasterEgg from "./components/EasterEgg.tsx";
import Barrage from "./components/Barrage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ArtText />
      <Barrage />
      <Meteor />
      <EasterEgg />
  </StrictMode>,
)
