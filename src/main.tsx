import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from './App.tsx'
import { ContatoPage} from './pages/contatos.tsx';
import { SobrePage } from './pages/sobre.tsx';
import { AnaliseAgua } from './components/analiseagua.tsx';
import { AnaliseSolo } from './components/analisesolo.tsx';
import { Pop } from './components/Pop.tsx';
import { Efluentes } from './components/efluentes.tsx';
import { MapProcesso } from './components/MapProcesso.tsx';
import { Consultoria } from './components/consultoria.tsx';
import { BPF } from './components/BPF.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sobre",
    element: <SobrePage/>
  },
  {
    path: "/contatos", element: <ContatoPage/>
  },
  {
    path: "/analiseagua", element: <AnaliseAgua/>
  },
  {
    path: "/analisesolo", element: <AnaliseSolo/>
  },
  {
    path: "/pop", element: <Pop/>
  },
  {
    path: "/efluentes", element: <Efluentes/>
  },
  {
    path: "/mapprocesso", element: <MapProcesso/>
  },
  {
    path: "/consultoria", element: <Consultoria/>
  },
  {
    path: "/BPF", element: <BPF/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
