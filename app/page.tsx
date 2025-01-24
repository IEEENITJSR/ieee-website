import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
import ImageSlider from "./components/ImageSlider"
import About from "./components/About";
import AboutIEEE from "./components/Aboutieee";

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
    <ImageSlider/>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <>
        <About/>
        <AboutIEEE/>
        </>
      )}
    </>
  )
}