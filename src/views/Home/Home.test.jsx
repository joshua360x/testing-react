import { getByRole, render, screen } from "@testing-library/react"
import App from "../../App"
import Profile from "../../components/Profile/Profile"
import Home from "./Home"

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {


render(<Home user={user} />)

const name = screen.getByRole('heading', { level: 1 })
const motto = screen.getByLabelText('motto')
const interestHeading = screen.getByRole('heading', { level: 2 })
const avatar = screen.getByAltText('avatar')

// screen.debug()

return (
  expect(name).toBeInTheDocument(),
  expect(motto).toBeInTheDocument(),
  expect(interestHeading).toBeInTheDocument(),
  expect(avatar).toBeInTheDocument()
)
})
