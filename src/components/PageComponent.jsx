const PageComponent = ({ backgroundColor, text }) => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        background: backgroundColor,
        height:"100vh"
      }}
    >
      {text}
    </div>
  );
};

export default PageComponent;