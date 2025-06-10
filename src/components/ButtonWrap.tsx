

type BWrap={
    variant:"primary"|"secondary"
} & React.ComponentProps<'button'>
 
function ButtonWrap({variant,children,...rest}:BWrap) {
  return (
    <div>
        <button className={`name-with-${variant}`} {...rest}> {children}</button>


    </div>
  )
}

export default ButtonWrap