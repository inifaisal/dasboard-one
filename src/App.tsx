import {
  RouterProvider,
} from "react-router-dom";

import { routers } from '@/pages/routes'

import './styles/globals.css'
import { ThemeProvider } from "./components/theme-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routers} />
    </ThemeProvider>

  )
}

export default App
