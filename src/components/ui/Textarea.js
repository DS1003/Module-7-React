const Textarea = ({ placeholder, value, onChange, className }) => {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border p-2 w-full rounded ${className}`}
      ></textarea>
    );
  };
  
  export default Textarea;