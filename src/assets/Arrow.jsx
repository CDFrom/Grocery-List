const Arrow = (props) => {
  return (
    <div {...props} style={{ height: "16px" }}>
      <svg height='16' width='16'>
        <path d='M0 0 L16 8 L0 16 Z' />
      </svg>
    </div>
  );
};

export default Arrow;
