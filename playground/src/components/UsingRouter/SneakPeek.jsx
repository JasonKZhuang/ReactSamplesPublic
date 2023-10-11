import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function SneakPeek() {
  return (
    <div>
      {/* 
    // with relative links you can change the query string easily
    // without having to reconstruct the current URL 
    */}
      <Link to="?something=different" />

      {/* 
    // Or link deeper, assuming you're at `/users/123` you can link
    // to `/users/123/account/reset-password` with: 
    */}
      <Link to="account/reset-password" />

      {/* 
    // With the new route ranking algorithm, we're able to validate routes
    // as they are matching the location. If `validate` returns false, the
    // route acts as if the path didn't match the location at all 
    */}
      <Route path="event/:date" validate={(params) => isValidDate(params.date)}>
        <Event />
      </Route>
    </div>
  );
}

// useLocation makes navigation-based side-effects a breeze
function usePageViews() {
  const { location } = useLocation();
  useEffect(() => {
    ga("send", "pageview", location.pathname);
  }, [location]);
}

// You can access params with a hook
// (much friendlier for TypeScript, too)
function SomeComponent() {
  const { userId } = useParams();
  // ...
}

export default SneakPeek;
