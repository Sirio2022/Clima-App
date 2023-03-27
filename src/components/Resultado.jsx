import useClima from '../hooks/useClima';

export default function Resultado() {
  const { resultado } = useClima();

  const { name, main } = resultado;

  // Grados Kelvin

  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es: </h2>

      <p className="clima">
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>Máxima: {parseInt(main.temp_max - kelvin)} °C</p>
        <p>Mínima: {parseInt(main.temp_min - kelvin)} °C</p>
      </div>
    </div>
  );
}
