import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          `http://localhost:3000/api/v1/blog/singleblogs?id=${id}`
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
                      <a href="index.html" className="relative text-[#4b5966]">
                        Home
                      </a>
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
            <div className="min-[992px]:w-[66.66%] w-full px-[12px]">
              <div className="gi-blogs-content">
                <div className="gi-blogs-inner">
                  <div className="gi-single-blog-item">
                    <div className="single-blog-info">
                      <figure className="blog-img mb-[16px]">
                        <a href="#">
                          <img
                            src={blog.image}
                            alt="blog imag"
                            className="w-full rounded-[5px]"
                          />
                        </a>
                      </figure>
                      <div className="single-blog-detail">
                        <label className="mb-[15px] text-[#999] inline-block">
                          {new Date(blog.createdAt).toLocaleDateString()} -{" "}
                          <a
                            href="#"
                            className="text-[#999] hover:text-[#5caf90]"
                          >
                            {blog.category}
                          </a>
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
                              <div className="min-[768px]:w-[50%] w-full px-[12px] mb-[24px] flex">
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

            <div className="min-[992px]:w-[33.33%] w-full gi-blogs-sidebar gi-blogs-leftside max-[991px]:mt-[30px] px-[12px]">
              <div className="gi-blog-search h-[50px] w-full mb-[30px] p-[0] outline-[0] border-[1px] border-solid border-[#eee] text-[#4b5966] relative rounded-[5px] overflow-hidden">
                <form
                  className="gi-blog-search-form flex items-center bg-[#fff]"
                  action="#"
                >
                  <input
                    className="form-control block w-full min-h-[48px] h-[48px] px-[20px] text-[16px] font-normal leading-[1] text-[#777] bg-transparent border-[0] outline-[0] tracking-[0]"
                    placeholder="Search Our Blog"
                    type="text"
                  />
                  <button
                    type="submit"
                    className="submit relative h-[48px] w-[48px] text-[#4b5966]"
                  >
                    <i className="gicon gi-search"></i>
                  </button>
                </form>
              </div>
              <div className="gi-blog-sidebar-wrap p-[30px] border-[1px] border-solid border-[#eee] rounded-[5px]">
                <div className="gi-sidebar-block mb-[30px] gi-sidebar-recent-blog">
                  <div className="gi-sb-title border-b-[2px] border-solid border-[#eee] pb-[15px]">
                    <h3 className="gi-sidebar-title w-full flex justify-between relative leading-[1.2] mb-[6px] font-Poppins text-[18px] font-medium">
                      Recent Articles
                    </h3>
                  </div>
                  <div className="gi-blog-block-content gi-sidebar-dropdown">
                    <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                      <div className="gi-sidebar-block-img mr-[15px] max-[1199px]:mb-[15px] max-[991px]:mb-[0]">
                        <img
                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                          alt="blog imag"
                          className="w-[100px] rounded-[5px]"
                        />
                      </div>
                      <div className="gi-sidebar-block-detial">
                        <h5 className="gi-blog-title leading-[1.2] mb-[6px]">
                          <a
                            href="blog-detail-left-sidebar.html"
                            className="text-[#777] text-[16px] tracking-[0] leading-[22px] font-semibold capitalize"
                          >
                            The best fashion influencers.
                          </a>
                        </h5>
                        <div className="gi-blog-date mb-[10px] text-[14px] text-[#999] leading-[1] tracking-[0]">
                          February 10,2024
                        </div>
                        <a
                          href="blog-left-sidebar.html"
                          className="text-[14px] text-[#5caf90] w-full leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                        >
                          - RO Water purefire
                        </a>
                      </div>
                    </div>{" "}
                    <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                      <div className="gi-sidebar-block-img mr-[15px] max-[1199px]:mb-[15px] max-[991px]:mb-[0]">
                        <img
                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                          alt="blog imag"
                          className="w-[100px] rounded-[5px]"
                        />
                      </div>
                      <div className="gi-sidebar-block-detial">
                        <h5 className="gi-blog-title leading-[1.2] mb-[6px]">
                          <a
                            href="blog-detail-left-sidebar.html"
                            className="text-[#777] text-[16px] tracking-[0] leading-[22px] font-semibold capitalize"
                          >
                            The best fashion influencers.
                          </a>
                        </h5>
                        <div className="gi-blog-date mb-[10px] text-[14px] text-[#999] leading-[1] tracking-[0]">
                          February 10,2024
                        </div>
                        <a
                          href="blog-left-sidebar.html"
                          className="text-[14px] text-[#5caf90] w-full leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                        >
                          - RO Water purefire
                        </a>
                      </div>
                    </div>
                    <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                      <div className="gi-sidebar-block-img mr-[15px] max-[1199px]:mb-[15px] max-[991px]:mb-[0]">
                        <img
                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                          alt="blog imag"
                          className="w-[100px] rounded-[5px]"
                        />
                      </div>
                      <div className="gi-sidebar-block-detial">
                        <h5 className="gi-blog-title leading-[1.2] mb-[6px]">
                          <a
                            href="blog-detail-left-sidebar.html"
                            className="text-[#777] text-[16px] tracking-[0] leading-[22px] font-semibold capitalize"
                          >
                            The best fashion influencers.
                          </a>
                        </h5>
                        <div className="gi-blog-date mb-[10px] text-[14px] text-[#999] leading-[1] tracking-[0]">
                          February 10,2024
                        </div>
                        <a
                          href="blog-left-sidebar.html"
                          className="text-[14px] text-[#5caf90] w-full leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                        >
                          - RO Water purefire
                        </a>
                      </div>
                    </div>
                    <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                      <div className="gi-sidebar-block-img mr-[15px] max-[1199px]:mb-[15px] max-[991px]:mb-[0]">
                        <img
                          src="https://provenonline.in/wp-content/uploads/2023/01/610r5cGRijL._SL1500_.jpg"
                          alt="blog imag"
                          className="w-[100px] rounded-[5px]"
                        />
                      </div>
                      <div className="gi-sidebar-block-detial">
                        <h5 className="gi-blog-title leading-[1.2] mb-[6px]">
                          <a
                            href="blog-detail-left-sidebar.html"
                            className="text-[#777] text-[16px] tracking-[0] leading-[22px] font-semibold capitalize"
                          >
                            The best fashion influencers.
                          </a>
                        </h5>
                        <div className="gi-blog-date mb-[10px] text-[14px] text-[#999] leading-[1] tracking-[0]">
                          February 10,2024
                        </div>
                        <a
                          href="blog-left-sidebar.html"
                          className="text-[14px] text-[#5caf90] w-full leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                        >
                          - RO Water purefire
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gi-sidebar-block">
                  <div className="gi-sb-title border-b-[2px] border-solid border-[#eee] pb-[15px]">
                    <h3 className="gi-sidebar-title w-full flex justify-between relative leading-[1.2] mb-[6px] font-Poppins text-[18px] font-medium">
                      Categories
                    </h3>
                  </div>
                  <div className="gi-blog-block-content gi-sidebar-dropdown">
                    <ul>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                            checked
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            Dairy & Milk
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 68
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            Seafood
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 58
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            Bakery
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 84
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            cosmetics
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 63
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            electrics
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 75
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            phones
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 26
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            Clothes
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 39
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                      <li>
                        <div className="gi-sidebar-block-item py-[15px] border-b-[1px] border-solid border-[#eee] flex flex-row max-[1199px]:flex-col max-[991px]:flex-row relative">
                          <input
                            type="checkbox"
                            className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[99] top-[50%] left-[0] translate-y-[-50%]"
                          />
                          <a
                            href="javascript:void(0)"
                            className="w-full text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer flex justify-between"
                          >
                            Watch
                            <span
                              title="Products"
                              className="text-[#999] text-[13px]"
                            >
                              - 48
                            </span>
                          </a>
                          <span className="checked" />
                        </div>
                      </li>
                    </ul>
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
