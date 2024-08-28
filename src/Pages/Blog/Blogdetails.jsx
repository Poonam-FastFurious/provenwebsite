import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Baseurl } from "../../confige";

/* eslint-disable react/no-unescaped-entities */
function Blogdetails() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // replace with the actual blog ID or retrieve from route params

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${Baseurl}/api/v1/blog/singleblogs?id=${id}`
        );
        setBlog(response.data.data); // Assuming response data is in response.data.data
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);
  console.log(blog);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog details</p>;
  if (!blog) return <p>No blog found</p>;

  return (
    <>
      <div className="gi-breadcrumb mb-[40px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="flex flex-wrap m-0 p-[15px] border-[1px] border-solid border-[#eee] rounded-b-[5px] border-t-[0] gi_breadcrumb_inner">
                <div className="min-[768px]:w-[50%] w-full px-[12px]">
                  <h2 className="gi-breadcrumb-title text-[#4b5966] block text-[15px] font-Poppins leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                    Blog Page
                  </h2>
                </div>
                <div className="min-[768px]:w-[50%] w-full px-[12px]">
                  <ul className="gi-breadcrumb-list text-right max-[767px]:text-center">
                    <li className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                      <Link to="/" className="relative text-[#4b5966]">
                        Home
                      </Link>
                    </li>
                    <li className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize active">
                      Blog Page
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="gi-blog py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
          <div className="flex flex-wrap w-full">
            <div className="min-[992px]:w-full w-full px-[12px]">
              <div className="gi-blogs-content">
                <div className="gi-blogs-inner">
                  <div className="gi-single-blog-item">
                    <div className="single-blog-info">
                      <figure className="blog-img mb-[16px]">
                        <Link to="#">
                          <img
                            src={blog.image}
                            alt="blog imag"
                            className="w-full rounded-[5px]"
                          />
                        </Link>
                      </figure>
                      <div className="single-blog-detail">
                        <label className="mb-[15px] text-[#999] inline-block">
                          {new Date(blog.createdAt).toLocaleDateString()} -{" "}
                          <Link
                            to="#"
                            className="text-[#999] hover:text-[#5caf90]"
                          >
                            {blog.category}
                          </Link>
                        </label>
                        <h3 className="text-[22px] font-semibold text-[#4b5966] leading-[1.2] mb-[6px] max-[767px]:text-[20px] max-[575px]:text-[19px]">
                          {blog.title}
                        </h3>
                        <p className="gi-text text-[#777] text-[14px] mb-[16px]">
                          {blog.content}
                        </p>

                        <div className="sub-img mt-[30px] mx-[-12px]">
                          {blog.thumbnail.map((thumb, index) => (
                            <div className="flex flex-wrap" key={index}>
                              <div className="min-[768px]:w-[100%] w-full px-[12px] mb-[24px] flex">
                                <img
                                  src={thumb}
                                  alt="blog"
                                  className="w-full rounded-[5px]"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogdetails;
