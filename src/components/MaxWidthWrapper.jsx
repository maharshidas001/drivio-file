import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <>
      <div className={cn("mx-auto max-w-screen-xl px-3 sm:px-6", className)}>
        {children}
      </div>
    </>
  )
};

export default MaxWidthWrapper;