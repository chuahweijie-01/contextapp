import BookListPage from "./components/booklist";
import NavBar from "./components/navbar";
import ThemeToggle from "./components/themetoggle";
import AuthContextProvider from "./contexts/authcontex";
import BookContextProvider from "./contexts/bookcontext";
import ThemeContextProvider from "./contexts/themecontext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookListPage />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
