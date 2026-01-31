import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
      <p className="text-lg text-gray-700">
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
};

export default ErrorPage;
