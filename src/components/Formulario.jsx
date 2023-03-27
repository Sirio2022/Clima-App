export default function Formulario() {
  return (
    <div className="contenedor">
      <div className="campo">
        <label htmlFor="ciudad">Ciudad: </label>
        <input type="text" id="ciudad" name="ciudad" />
      </div>
      <div className="campo">
        <label htmlFor="pais">País: </label>
        <select id="pais" name="pais">
          <option value="">-- Seleccione un país --</option>
          <option value="AR">Argentina</option>
          <option value="BR">Brasil</option>
          <option value="CL">Chile</option>
          <option value="CO">Colombia</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="PE">Perú</option>
          <option value="ES">España</option>
        </select>
      </div>

      <input type="submit" value="Consultar Clima" />
    </div>
  );
}
