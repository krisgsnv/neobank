import { useAppSelector } from "@/hooks/useAppSelector";
import { Navigate, useParams } from "react-router";

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
  const currentStep = useAppSelector((state) => state.application.step);
  const currentApplicationId = useAppSelector(
    (state) => state.application.applicationId
  );
  const { applicationId } = useParams();

  const isIdsEqual = (): boolean => {
    return !!(
      applicationId &&
      currentApplicationId &&
      +applicationId === currentApplicationId
    );
  };

  if ((step > currentStep) || !isIdsEqual()) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedStepRoute;
