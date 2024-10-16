import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './component/Context.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </AppProvider>
  </StrictMode>,
)
