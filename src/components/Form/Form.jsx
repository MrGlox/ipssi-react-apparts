const Form = ({ text, handleChange }) => (
  <>
    <input type="text" defaultValue={text} onChange={handleChange} />
    <p>{text}</p>
  </>
);

export default Form;
