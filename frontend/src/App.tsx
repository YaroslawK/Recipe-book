import {Routes, Route } from 'react-router-dom';
import RecipeListPage from './components/RecipeListPage/RecipeListPage';
import RecipeInfoPage from './components/RecipeInfoPage/RecipeInfoPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipe/:idMeal" element={<RecipeInfoPage />} />
      </Routes>
  );
}

export default App;
