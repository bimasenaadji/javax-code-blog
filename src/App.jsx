import LandingLayout from "./Components/Layouts/LandingLayout";
import BlogLayout from "./Components/Layouts/BlogLayout";
import Divider from "./Components/Elements/Divider";
import { useEffect, useState } from "react";
import { getAllBlogs } from "./services/blog.service";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs((data) => {
      setBlogs(data.getBlog.data);
    });
  }, []);
  return (
    <div className=" bg-gray-50">
      <LandingLayout />
      <Divider />
      <div className="flex flex-wrap justify-center pt-8  mx-10 gap-8 pb-6">
        {blogs.map((data) => (
          <BlogLayout title={data.title}>{data.description}</BlogLayout>
        ))}
      </div>
    </div>
  );
}

export default App;
