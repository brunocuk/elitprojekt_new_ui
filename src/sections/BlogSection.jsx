import { MainButton } from "../components";
import { ROUTES } from "../routes/routes";
import BlogCard from "../components/BlogCard";
import { useState, useEffect } from "react";
import axios from "axios";
import constantsExport from "../config/constants";

const API_PATH = constantsExport.API_PATH

const BlogSection = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchBlogs = async () => {
          try {
              const response = await axios.get(API_PATH + '/api/blogs?populate=*', {
                params: {
                  'pagination[pageSize]': 3,
                },
              });
              setBlogs(response.data.data);
          } catch (error) {
              console.error('Error fetching blogs:', error);
          } finally {
              setLoading(false);
          }
      };

      fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col md:px-24 lg:px-32 xl:px-44 px-4 items-start justify-start dark:bg-darkBackground bg-textColorDark overflow-hidden pt-32">
      <div className="flex md:flex-row flex-col md:items-center items-start gap-4 justify-between w-full">
        <div>
          <h2 className="font-bold tracking-wide md:text-[54px] text-[34px] dark:text-textColorDark text-darkBackground">
            Our Latest Blog
          </h2>
          <p className="satoshi font-normal md:text-[19px] text-[16px] max-w-[522px] dark:text-textColorDark text-darkBackground">
            Explore our latest insights and expertise in web development,
            digital marketing, and creative strategy. Our blog delves into
            industry trends, offers practical tips, and shares innovative ideas
            to empower businesses and spark new perspectives.
          </p>
        </div>
        <div>
          <MainButton to={ROUTES.BLOG} text={"Read More"} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 pt-24 w-full">
        {blogs.map((blog, blogIndex) => (
          <BlogCard
            key={blogIndex}
            image={`http://localhost:1337/${blog.image.url}`}
            title={blog.Name}
            shortDescription={blog.ShortDescription}
            to={"/blog/" + blog.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
