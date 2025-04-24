import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// 🧠 Ionic setup
import { setupIonicReact } from '@ionic/react';
setupIonicReact();

// ✅ Ionic core & utility CSS
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// Optional Ionic CSS utilities
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// 🎨 Your custom theme variables (optional)
import './theme/variables.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);