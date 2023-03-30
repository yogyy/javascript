  interface LTProps {
  text: string;
  maxLength: number;
}

function LongText({ text, maxLength }: LTProps) {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <span>
      {isExpanded ? text : text.slice(0, maxLength)}
      {isExpanded ? (
        <button onClick={toggleExpanded}> Read less</button>
      ) : (
        <button onClick={toggleExpanded}> ...Read more</button>
      )}
    </span>
  );
}
