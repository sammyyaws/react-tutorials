
type genytypeProps<Generic>={
items:Generic[];
onClick:(value:Generic)=>void;
  renderItem: (item: Generic) => React.ReactNode;
}

function List<Generic >({items,onClick,renderItem}:genytypeProps<Generic>) {

  return (
    <div>
        <h1>Generic typing item list</h1>
      {items.map((item,index)=>{
        return (
  <div key={index} onClick={()=>onClick(item)}>  {renderItem(item)} </div>
)}
  )
      }
    </div>
  )
}

export default List
