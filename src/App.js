import {Routes, Route} from 'react-router-dom';
import {DashboardPage, LoginPage, PageNotFoundPage} from './pages';
import {AddProductPanel, AllProductsPanel, EditProductPanel} from 'components/panels';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashboardPage/>}>
          <Route index element={<AllProductsPanel/>}/>
          <Route path="add" element={<AddProductPanel/>}/>
          <Route path="edit" element={<EditProductPanel/>}/>
        </Route>
        <Route path="*" element={<PageNotFoundPage/>}/>
      </Routes>
    </>
  );
}

export default App;
