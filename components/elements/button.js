const Button = ({
    isPrimary,
    isSmallFormat,
    onClick,
    children
}) => (
  <>
    <button onClick={onClick}>{children}</button>
    <style jsx>{`
      button {
        width: ${isSmallFormat ? '280px' : ' 218px'};
        background: ${isPrimary ? '#a6ffcb' : '#fff'};
        color: #14213d;
        font-size: ${isSmallFormat ? '18px' : ' 18px'};
        font-weight: bold;
        border: 1px solid #a6ffcb;
        box-shadow: 0px 0px 10px #a6ffcb;
        border-radius: 10px;
        line-height: ${isSmallFormat ? '48px' : ' 48px'};
        cursor: pointer;

      }
    `}</style>
  </>
)

export default Button