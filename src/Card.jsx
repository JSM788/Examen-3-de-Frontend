//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ form }) {
  return (
    <div className="card">
      <h4>Hola {form.nombre}!</h4>
      <p>
        <strong>Sabemos que tu color favorito es: </strong>
      </p>
      <div style={{ backgroundColor: form.color }} className="card-color">
        {form.color}
      </div>
    </div>
  )
}

export default Card
