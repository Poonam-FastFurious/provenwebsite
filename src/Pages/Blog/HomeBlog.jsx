import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeBlog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://provenbackend.onrender.com/api/v1/blog/allblogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, []);
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <>
      <section className="py-24 bg-AFPPrimaryLight ">
        <div className="mx-auto max-W-full container px-4 sm:px-6 lg:px-8">
          <h2 className=" text-AFPPrimary sm:text-4xl text-2xl font-extrabold text-center mb-16">
            Our latest Blog
          </h2>
          <div className="  flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {blogs.slice(0, 4).map((blog, index) => (
              <div
                key={index}
                className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl bg-gray-50"
              >
                <div className="flex items-center">
                  <img
                    src={blog.thumbnail}
                    alt="blogs tailwind section"
                    className="rounded-t-2xl w-full"
                  />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl bg-gray-50">
                  <span className="font-medium mb-3 block">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <h4 className="text-22xl text-gray-900  font-bold   tracking-wide mb-5">
                    {blog.title}
                  </h4>
                  <p className="text-gray-500 leading-6 mb-10">
                    {truncateText(blog.content, 120)}
                  </p>
                  <Link
                    to="/Blogdetails"
                    className="cursor-pointer text-lg  text-AFPPrimary font-semibold"
                  >
                    Read more..
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBlog;
