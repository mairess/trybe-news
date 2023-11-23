import './App.css';
import NewsList from './components/newsList';
import FeaturedNews from './components/featuredNews';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <FeaturedNews />
      <NewsList />
    </>
  );
}

export default App;
