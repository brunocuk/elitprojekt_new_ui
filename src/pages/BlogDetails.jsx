import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom"; // Assuming React Router is used for routing
import axios from "axios";
import Markdown from "react-markdown";
import rounded from "../assets/rounded.svg";
import roundedBottom from "../assets/roundedBottom.svg";
import constantsExport from "../config/constants";

const API_PATH = constantsExport.API_PATH;
const IMG_PATH = constantsExport.IMG_PATH;

const BlogDetails = () => {
  const { slug } = useParams(); // Get slug from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const leftSectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [leftSectionHeight, setLeftSectionHeight] = useState(0);

  useEffect(() => {}, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          API_PATH + `/api/blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        setBlog(response.data.data[0]); // Get the first (and only) matching blog
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();

    const leftSection = leftSectionRef.current;

    if (!leftSection) return;

    // Measure the height of the Left Section
    setLeftSectionHeight(leftSection.offsetHeight);

    const leftSectionTop = leftSection.offsetTop;

    const handleScroll = () => {
      setIsSticky(window.scrollY >= leftSectionTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  const formatDate = (isoDateString) => {
    // Create a Date object from the ISO string
    const date = new Date(isoDateString);

    // Format the date into "26 Nov 2024"
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="dark:dark:bg-darkBackground bg-textColorDark pt-6 flex flex-col overflow-hidden px-4 md:px-24 lg:px-32 xl:px-44">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url("${IMG_PATH + blog.image.url}")`,
        }}
        className="w-full relative h-[600px] bg-center bg-cover md:rounded-[70px] rounded-[30px] flex flex-col"
      >
        <div className="absolute top-0 left-0">
          <div className="flex items-start">
            <div className="flex flex-col gap-4 bg-darkBackground md:rounded-br-[70px] rounded-br-[30px] py-6 pl-3 pr-8 w-3/4">
              <h1 className="dark:dark:text-textColorDark text-darkBackground font-bold md:text-[60px] text-[27px] leading-tight tracking-wide">
                {blog.Name}
              </h1>
            </div>
            <img
              src={rounded}
              className="md:w-[70px] w-[30px] md:h-[70px] h-[30px]"
            />
          </div>
          <img
            src={rounded}
            className="md:w-[70px] w-[30px] md:h-[70px] h-[30px]"
          />
        </div>
        <div className="absolute bottom-0 right-0 flex flex-col items-end">
          <img src={roundedBottom} className="w-[16px] h-[16px]" />
          <div className="flex items-end">
            <img src={roundedBottom} className="w-[16px] h-[16px]" />
            <div className="bg-darkBackground p-4 rounded-tl-[16px] flex flex-col">
              <img
                src={IMG_PATH + `${blog.author.formats.thumbnail.url}`}
                alt={blog.Name}
                className="w-24 h-24 object-cover rounded-[12px]"
              />
              <p className="text-textColorDark text-xs pt-2 tracking-widest">
                Author:
              </p>
              <h3 className="text-textColorDark font-semibold">
                {blog.authorName}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      <div className="flex justify-between items-start gap-6 pt-12">
        {/* // Left Section */}
        <div className="w-1/4">
          <div className="bg-textColorDark bg-opacity-10 rounded-[28px] p-4 flex flex-col">
            <p className="text-textColorDark text-sm pt-4 pb-2">
              {blog.ShortDescription}
            </p>
          </div>
        </div>

        {/* // Middle Section */}
        <div className="w-2/4 flex flex-col text-textColorDark">
          <div className="p-2 bg-textColorDark rounded-full bg-opacity-10 flex items-center justify-center w-[220px] mb-4">
            <p className="text-textColorDark tracking-wide text-sm">
              Updated At: {formatDate(blog.updatedAt)}
            </p>
          </div>
          <Markdown className="line-break text-textColorDark">
            {blog.content}
          </Markdown>
          <div
            dangerouslySetInnerHTML={{ __html: blog.TinyEditor }}
            style={{ wordWrap: "break-word" }}
            className="line-break"
          ></div>
          <div className="flex items-center gap-4 border-t-2 border-textColorDark border-opacity-15 mt-4 pt-4">
            <img
              src={IMG_PATH + `${blog.author.formats.thumbnail.url}`}
              alt={blog.Name}
              className="w-24 h-24 object-cover rounded-[12px]"
            />
            <div className="flex flex-col">
              <p className="text-textColorDark text-sm tracking-widest text-opacity-50">
                Written by:
              </p>
              <h3 className="text-textColorDark font-semibold">
                {blog.authorName}
              </h3>
              <h3 className="text-textColorDark text-sm text-opacity-50 font-normal">
                {blog.authorPosition}
              </h3>
            </div>
          </div>
        </div>

        {/* // Right Section */}
        <div className="w-1/4"></div>
      </div>

    </div>
  );
};

export default BlogDetails;
