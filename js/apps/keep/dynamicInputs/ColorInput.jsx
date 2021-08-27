
export function ColorInput({type, name, onChangeStyle}) {
  const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6']
  return (
      <section className="input-container">
        {colors.map(color=>(
          <article key={color} onClick={()=>onChangeStyle('backgroundColor', color)} style={{backgroundColor:color}} className="input-pick"></article>
        ))} 

      </section>
  )
}

