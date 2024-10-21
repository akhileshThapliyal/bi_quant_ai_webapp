import AboutPage from '../Components/Pages/AboutPage';
import HomePage from '../Components/Pages/HomePage';

const routes = [
  {
    path: '',
    element: <HomePage />
  },
  {
    path: 'about',
    element: <AboutPage />
  },
];

export default routes;