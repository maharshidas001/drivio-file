const MaxWidthWrapper = ({ children }) => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-3 sm:px-6">
        {children}
      </div>
    </>
  )
};

export default MaxWidthWrapper;