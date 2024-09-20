interface IButton {
  onClick?: () => void;
  children: React.ReactNode;
  className?: 'string';
  type?: 'button' | 'submit';
}

const Button: React.FC<IButton> = ({ onClick, className, children }) => {
  const defaultStyle =
    'font-bold rounded transition-transform duration-300 bg-green-500 text-white hover:bg-green-600 px-4 py-2 text-base active:scale-95';

  return (
    <button onClick={onClick} className={`${defaultStyle} ${className}}`}>
      {children}
    </button>
  );
};

export default Button;
