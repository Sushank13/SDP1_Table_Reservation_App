import { Routes, Route } from "react-router-dom";
import SignInWithEmailForm from "./views/Authentication/adminSignin";
import TopRestaurants from "./views/Reports/TopRestaurants";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInWithEmailForm />} />
      <Route path="/top-restaurants" element={<TopRestaurants />} />
    </Routes>
  );
};

export default Router;
