import axios from "axios";

export const getAllBlogs = (callback) => {
  axios
    .get("http://localhost:3000/")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addBlog = (data) => {
  axios
    .post("http://localhost:3000/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      console.log("Sukses mengirim data");
    })
    .catch((error) => {
      console.log(error);
    });
};
