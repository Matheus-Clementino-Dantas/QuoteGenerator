function Button({ disabled, className, aria, children, onClick }) {
  return (
    <button
      disabled={disabled}
      className={`text-text-light mr-2 bg-bg-light p-2 rounded-lg shadow-sm ${className}`}
      aria-label={aria}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
