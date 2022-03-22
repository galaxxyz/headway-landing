import GlobalStyle from './shared/GlobalStyle';
import { Navigation, Footer, MainButton } from './components';
import {
  Hero,
  About,
  BooksSummaries,
  BooksCategories,
  ReadOrListen,
  Reviews,
} from './sections';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Hero />
      <About />
      <BooksSummaries />
      <BooksCategories />
      <ReadOrListen />
      <Reviews />
      <Footer />
      <MainButton />
    </>
  );
}

export default App;
