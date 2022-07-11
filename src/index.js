import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = React.lazy(() => import('./App'));

root.render(
  <React.StrictMode>
    <Suspense >
    <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
