import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <section className="mb-6">
        <MaxWidthWrapper className={'mt-8 text-center'}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center">Upload your files whenever you want</h1>
          <Button className={'mt-8'}>Get started</Button>
        </MaxWidthWrapper>
      </section>
      <Footer />
    </>
  )
}

export default Home;