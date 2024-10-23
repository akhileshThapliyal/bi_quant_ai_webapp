import AboutPage from '../Components/Pages/AboutPage';
import ContactPage from '../Components/Pages/ContactPage';
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
  {
    path: 'contact',
    element: <ContactPage />
  },
];

export default routes;