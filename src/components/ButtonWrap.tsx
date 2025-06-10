

type BWrap={
    variant:"primary"|"secondary";
    children:string;
} & Omit< React.ComponentProps<'button'>,'children'>
 
function ButtonWrap({variant,children,...rest}:BWrap) {
  return (
    <div>
        <button className={`name-with-${variant}`} {...rest}> {children}</button>


    </div>
  )
}

export default ButtonWrap