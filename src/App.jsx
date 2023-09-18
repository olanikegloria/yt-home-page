import Header from "./components/Header";
import RenderVideo from "./components/RenderVideo";
import "./App.css";
import { ToggleProvider } from "./ToggleContext";
import Categories from "./components/Categories";

export default function App() {
  return (
    <ToggleProvider>
      <div className="App">
        <Header />
        <Categories/>
        <RenderVideo />
      </div>
    </ToggleProvider>
  );
}
