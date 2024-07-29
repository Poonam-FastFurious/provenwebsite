import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Baseurl } from "../../confige";

function HomeBlog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/blog/allblogs")
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
      <section className="gi-blog-section py-[40px] max-[767px]:py-[30px] wow fadeInUp bg-[#E6F4FA]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className=" p-4 font-[sans-serif]">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
                Latest Blog Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {blogs.slice(0, 4).map((blog, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 border"
                  >
                    <img
                      src={blog.image}
                      alt="Blog Post 1"
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {truncateText(blog.content, 120)}
                      </p>
                      <Link
                        to="/Blogdetails"
                        className="mt-4 inline-block text-blue-600 text-sm hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBlog;
