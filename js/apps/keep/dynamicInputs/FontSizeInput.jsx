
export function FontSizeInput({type, name, onChangeStyle}) {
  const sizes = ['8px', '16px', '32px', '48px']

  return (
    <section className="dynamic-input font-size">
      <section className="input-container">
        {sizes.map(size=>(
          <article key={size} onClick={()=>onChangeStyle('fontSize', size)} className="input-pick">{size}</article>
        ))} 

      </section>
    </section>
  )
}
