import { useContext } from "react"
import { UserContext } from "../../lib/context"

const MainPage = () => {
    const { theme } = useContext(UserContext);
    const bgURL = theme
      ? "src/assets/dark_bg.jpg"
      : "src/assets/light_bg.jpg";
  return (
      <main style={{backgroundImage : `url(${bgURL})` } } className="w-screen h-screen bg-cover">
    </main>
  )
}

export default MainPage