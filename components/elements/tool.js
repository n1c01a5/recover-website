const Tool = ({
    onClick,
    background,
    children
}) => (
  <>
    <li onClick={onClick}>{children}</li>
    <style jsx>{`
      li {
        background: ${background};
      }
    `}</style>
  </>
)

export default Tool