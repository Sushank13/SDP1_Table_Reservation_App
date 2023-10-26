import { Routes, Route } from "react-router-dom";
import Booking from "./views/Booking/index";
import ViewBooking from "./views/ViewBooking/ViewReservation";
import SignupForm from "./views/Authentication/customerAuthEmailSignUp"
import SignInWithEmailForm from "./views/Authentication/customerAuthSignin"
import RestaurantList from "./views/ListRestaurants/listRestaurants"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupForm />} />
      <Route path="/signin" element={<SignInWithEmailForm />} />
      <Route path="/listrestaurants" element={<RestaurantList />} />
      <Route path="/book" element={<Booking />} />
      <Route path="/view" element={<ViewBooking/>}/>

    </Routes>
  );
};

export default Router;
