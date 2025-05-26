
type EleContainer={
    children:React.ReactNode;
}
function Eye(props:EleContainer) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Eye
