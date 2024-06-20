import LandingLayout from "./Components/Layouts/LandingLayout";
import BlogLayout from "./Components/Layouts/BlogLayout";
import Divider from "./Components/Elements/Divider";

const getData = async () => {
  const response = await fetch("http://localhost:3000/");
  const data = await response.json();
  return data;
};

const datas = await getData();

function App() {
  return (
    <div className=" bg-gray-50">
      <LandingLayout />
      <Divider />
      <div className="flex flex-wrap justify-center pt-8  mx-10 gap-8 pb-6">
        {datas?.getBlog?.data.map((data) => (
          <BlogLayout title={data.title}>{data.description}</BlogLayout>
        ))}
      </div>
    </div>
  );
}

export default App;
