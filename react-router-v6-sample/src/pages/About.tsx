import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h3>location.state.myKey : {location.state?.myKey}</h3>
      <h3>location.pathname : {location.pathname}</h3>
      About
    </div>
  );
}

export default About;
