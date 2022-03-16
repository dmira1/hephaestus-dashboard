import {Routes, Route} from 'react-router-dom';
import {DashboardPage, LoginPage, PageNotFoundPage} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/*" element={<PageNotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
