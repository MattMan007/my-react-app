import Button from "./Button"
import Header from "./Header"
import Footer from "./Footer.jsx"
import List from "./List.jsx"
import SiteCreation from "./SiteCreation.jsx"
import ProfilePicture from "./ProfilePicture.jsx"
import Services from "./Services.jsx"
import UserGreeting from "./UserGreeting.jsx"

function App() {

  const companies = [
    {id: 1, name: "Urzisoft", projects: 69},
    {id: 2, name: "LaColtulBlocului SRL", projects: 9},
    {id: 3, name: "UnBaiat SRL", projects: 2},
    {id: 4, name: "CertSign", projects: 4}
  ]

  return (
    <>
      <Header></Header>
      <UserGreeting isLoggedIn={true} username="Mattman"></UserGreeting>
      <ProfilePicture></ProfilePicture>
      <Services></Services>
      <List items={companies} category="Companies we have worked with:"></List>
      <SiteCreation></SiteCreation>
      <Button></Button>
      <Footer></Footer>
    </>
  )
}

export default App
