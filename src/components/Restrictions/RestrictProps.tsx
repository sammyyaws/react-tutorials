type numberValue={
    value:number;
}

type positiveValue=numberValue &{
    isPositive?:boolean;
     isNegative?:never;
            isZero?:never;
}
type negativeValue =numberValue &{
    isNegative?:boolean;
     isPositive?:never;
         isZero?:never;
}
type ZeroValue= numberValue &{
    isZero?:boolean;
     isNegative?:never;
    isPositive?:never;
}
type Restrictions= positiveValue |negativeValue|ZeroValue



function RestrictProps({value,isPositive,isNegative,isZero}:Restrictions ){

  return (
    <div>
      {value} {isPositive} {isNegative }, {isZero}
    </div>
  )
}

export default RestrictProps
