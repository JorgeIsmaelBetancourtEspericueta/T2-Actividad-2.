import { useForm } from "./hooks/useForm";

export const Formularios = () => {
  
  const {formulario, email, password, onChange} = useForm()

  return (
    <>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <p></p>
      <input
        type="password"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
