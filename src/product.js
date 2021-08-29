import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Product() {
  return (
    <Link to="/CreateUser" type="button" class="btn btn-primary">
      Create user
    </Link>
  );
}

export default Product;
