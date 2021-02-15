import Home from './components/screens/Home';
import { AppProvider } from '@shopify/polaris';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;