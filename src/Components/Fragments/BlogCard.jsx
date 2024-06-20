const BlogCard = (props) => {
  const { title, children } = props;
  return (
    <>
      <div className="max-w-sm">
        <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              {title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {children}
          </p>
        </article>
      </div>
    </>
  );
};

export default BlogCard;
