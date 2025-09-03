import { createRoot } from 'react-dom/client'
import { AppRouter } from "./providers/AppRouter";
import './index.scss'


createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
