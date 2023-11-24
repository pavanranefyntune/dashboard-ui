import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {store} from "./Redux/store.js";
import {Provider}from "react-redux";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <App />
    <ReactQueryDevtools initialIsOpen={false}/>
  </Provider>,
  </QueryClientProvider>
)
