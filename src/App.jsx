import Header from "./Components/Header";
import Hero from "./Components/Hero Section/Hero";
import Footer from "./Components/Footer";
import TaskBoard from "./Components/Tasks/TaskBoard";
const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
    </div>
  );
};

export default App;
