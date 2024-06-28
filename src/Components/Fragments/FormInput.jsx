import Button from "../Elements/Button";
import { addBlog } from "../../services/blog.service";

const FormInput = () => {
  const handlerSubmit = (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      title: event.target.title.value,
      description: event.target.description.value,
    });

    addBlog(data);
    location.reload();
  };

  return (
    <div className="w-full max-w-md">
      <>
        <form onSubmit={handlerSubmit}>
          {/* Container Input Title */}
          <div className="my-3">
            <label
              for="title"
              class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-lg focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span class="text-sm font-medium text-gray-700"> Title </span>

              <input
                type="text"
                id="title"
                placeholder="Input title..."
                class="mt-1 w-full  border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-gray-50"
              />
            </label>
          </div>

          {/* Container Input Description */}
          <div className="my-5">
            <label
              for="description"
              class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-lg focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span class="text-sm font-medium text-gray-700">
                {" "}
                Description{" "}
              </span>

              <textarea
                type="text"
                id="description"
                placeholder="Input description..."
                class="mt-1 w-full h-12  border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-gray-50"
              />
            </label>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Button />
          </div>
        </form>
      </>
    </div>
  );
};

export default FormInput;
