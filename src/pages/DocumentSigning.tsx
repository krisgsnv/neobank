import DocumentSigningSection from "@/components/containers/sections/DocumentSigning";
import StepMessage from "@/components/containers/sections/StepMessage";

const DocumentSigning = (): JSX.Element => (
  <>
    <StepMessage
      title="Documents have been successfully signed and sent for approval"
      message="Within 10 minutes you will be sent a PIN code to your email for confirmation"
    />
    <DocumentSigningSection />
  </>
);

export default DocumentSigning;
