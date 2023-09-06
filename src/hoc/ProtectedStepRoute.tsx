import { Navigate } from "react-router";

interface PropsType {
  step: number;
  redirectPath?: string;
  children: React.ReactNode;
}

const ProtectedStepRoute = ({
  step,
  redirectPath = "/",
  children
}: PropsType): React.ReactNode => {
  const stepIn = 2;
  if (step > stepIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedStepRoute;
