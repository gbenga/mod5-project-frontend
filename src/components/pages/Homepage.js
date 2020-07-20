import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      Welcome, this is a home page. Use the nav bar to discover more. If you
      can't click anything its probably because you're not signed in. You can do
      so by going to 'Profile'
      <Link to={"/sign-in"}>Sign In</Link>, or <Link>Sign Up</Link>
    </div>
  );
}