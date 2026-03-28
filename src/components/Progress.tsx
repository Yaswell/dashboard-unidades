function Progress({ value }: { value: number }) {
  const getStatusClass = () => {
    if (value >= 100) return "bg-success";
    if (value >= 70) return "bg-warning";
    return "bg-danger";
  };

  return (
    <div className="progress-track">
      <div
        className={`progress-fill ${getStatusClass()}`}
        style={{ width: `${value}%` }}
      >
        <div className="progress-glow"></div>
      </div>
    </div>
  );
}

export default Progress;
