import {
  Landing,
  Cocktail,
  About,
  Error,
  HomeLayout,
  NewsLetter,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import "./index.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="cocktail/:id" element={<Cocktail />} />
          <Route path="about" element={<About />} />
          <Route path="news-letter" element={<NewsLetter />} />
        </Route>
        <Route path="*" element={<Error />} exact={true} />
      </Routes>
    </>
  );
};
export default App;
