import Header from "../Fragments/Header";
import FormInput from "../Fragments/FormInput";

const LandingLayout = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Header />
        <FormInput />
      </div>
    </>
  );
};

export default LandingLayout;
