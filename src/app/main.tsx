import { createRoot } from 'react-dom/client'
import { AppRouter } from "./providers/AppRouter";
import './index.scss'
import "@shared/config/i18next"

createRoot(document.getElementById('root')!).render(
  <AppRouter />
)
