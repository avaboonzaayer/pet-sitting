import Header from './Header.jsx';
import SitterList from './SitterList.jsx';
import BookSitter from './BookSitter.jsx';
import RegisterSitter from './RegisterSitter.jsx';

function App() {
  return (
    <div className="app">
      <BookSitter />
      <RegisterSitter />
      <Header />
      <SitterList />
    </div>
  );
}

export default App;
