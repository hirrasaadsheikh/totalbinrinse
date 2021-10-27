import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isAuth } from "../../action/authAction";
const Protected = ({ history }) => {
  useEffect(() => {
    if (!isAuth()) {
      history.push("/");
    } else if (isAuth().isAdmin !== true) {
      history.push("/login");
    }
  }, [history]);
  return <div></div>;
};

export default withRouter(Protected);
