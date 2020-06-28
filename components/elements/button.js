const Button = ({
    isPrimary,
    onClick,
    children
}) => (
  <>
    <button onClick={onClick}>{children}</button>
    <style jsx>{`
      button {
        background: ${isPrimary ? '#a6ffcb' : '#fff'};
        color: #14213d;
        font-size: 18px;
        font-weight: bold;
        border: 1px solid #a6ffcb;
        box-shadow: 0px 0px 10px #a6ffcb;
        border-radius: 10px;
        line-height: 48px;
        width: 218px;
      }
    `}</style>
  </>
)

export default Button