import Page1 from './pages/page1';
import { ThemeProvider } from './theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <Page1 />
      </ThemeProvider>
    </>
  );
}

export default App;
