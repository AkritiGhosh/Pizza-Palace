import { useContext } from "react"
import { UserContext } from "../../lib/context"

const MainPage = () => {
    const { darkTheme } = useContext(UserContext);
    const bgURL = darkTheme
      ? "src/assets/dark_bg.jpg"
      : "src/assets/light_bg.jpg";
  return (
      <main style={{backgroundImage : `url(${bgURL})` } } className="w-screen h-screen bg-cover">
    </main>
  )
}

export default MainPage