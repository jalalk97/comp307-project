/* 
Contributors:
    - Jalal Kalyati
*/

const ErrorMessage = ({ message }) => {
  return (
    <p
      style={{
        fontSize: "14px",
        color: "#990000",
        margin: 0,
        padding: 0,
        textAlign: "left",
      }}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
