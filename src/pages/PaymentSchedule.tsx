import DenyApplication from "@/components/containers/modals/DenyApplication";
import PaymentScheduleSection from "@/components/containers/sections/PaymentSchedule";
import StepMessage from "@/components/containers/sections/StepMessage";

const PaymentSchedule = (): JSX.Element => (
  <>
    <DenyApplication />
    <StepMessage
      title="Documents are formed"
      message="Documents for signing will be sent to your email"
    />
    <PaymentScheduleSection />
  </>
);

export default PaymentSchedule;
