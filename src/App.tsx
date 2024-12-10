import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/hero/Hero';
import { Features } from './components/sections/features/Features';
import { Categories } from './components/sections/categories/Categories';
import Cbcpage from './components/Cbcpage';
import Fcc from './components/Fcc';
import Pricing from './components/Pricing';
import PartnerForm from './components/PartnerForm';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/PartnerForm" element={<PartnerForm />} />
          <Route path="*" element={
            <Layout>
              <Hero />
              <Features />
              <Categories />
              <Cbcpage />
              <Fcc />
            </Layout>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
