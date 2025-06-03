

type RestictProps={
    value:number;
    isPositive:boolean;
    isNegative:boolean;
    isZero:boolean;
}


function RestrictProps({value,isPositive,isNegative,isZero}:RestictProps) {

  return (
    <div>
      {value} {isPositive} {isNegative }, {isZero}
    </div>
  )
}

export default RestrictProps
