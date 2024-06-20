const Button = () => {
  return (
    <>
      <button
        className=" rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-3"
        type="submit"
      >
        Send Blog
      </button>
    </>
  );
};

export default Button;
