import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const myNavFunction1 = useNavigate();

  const myNavFunction2 = useNavigate();

  const handleClick = () => myNavFunction2('/goodbye');

  useEffect(() => {
    setTimeout(() => {
      myNavFunction1("/", {});
      // myNavFunction(-1);
    }, 3000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      NotFound
      {/* <Navigate to="/" /> */}
      <button type="button" onClick={handleClick}>
        Goodbye
      </button>
    </div>
  );
}

export default NotFound;
