import { getByText, render, screen, waitFor } from "@testing-library/react"
import App from "./App"
import Header from "./components/layout/Header"

test('Should render the header', async () => {

  render(<App />)

const image = screen.getByRole('img')
// screen.debug()
const byText = await screen.findByText('Vonta')

return waitFor(() => {
  
  expect(image).toBeInTheDocument()
  expect(byText).toBeInTheDocument()
    })

})
