import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemoPage } from '../pages/DemoPage';
import { HomePage } from '../pages/HomePage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo/:slug" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
