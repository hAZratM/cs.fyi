import Body from "./sections/Body";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

const App = () => {
  return (
    <div className="bg-neutral-900 text-neutral-100 w-screen ">
      <div className="py-1 sm:py-5">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
