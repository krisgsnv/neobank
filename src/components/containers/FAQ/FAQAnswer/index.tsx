type FAQAnswerPropType = {
  text: string;
};

const FAQAnswer = (props: FAQAnswerPropType) => {
  return <p className="faq-answer">{props.text}</p>;
};

export default FAQAnswer;
