const Divider = () => {
  return (
    <>
      <div className="pt-10">
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-gray-50 text-indigo-700 px-6 font-semibold">
            Latest Blog
          </span>
        </span>
      </div>
    </>
  );
};

export default Divider;
