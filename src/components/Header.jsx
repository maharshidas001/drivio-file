import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {

  let isAuthenticated = false;

  return (
    <>
      <header className="shadow">
        <MaxWidthWrapper>
          <nav className="w-full py-2 flex items-center justify-between">
            <Link href={'/'}>
              <Image src={'/Logo.svg'} height={50} width={50} />
            </Link>

            <div className="flex items-center justify-between gap-3">
              {isAuthenticated ? (<>
                <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                <div className="w-px h-5 bg-muted-foreground"></div>
                <Button variant='outline'>Logout</Button>
              </>) : (
                <Button variant='outline'>Login</Button>
              )}
            </div>
          </nav>
        </MaxWidthWrapper>
      </header>
    </>
  )
};

export default Header;