import Button from "./Button"
import Header from "./Header"
import Footer from "./Footer.jsx"
import List from "./List.jsx"
import SiteCreation from "./SiteCreation.jsx"
import ProfilePicture from "./ProfilePicture.jsx"
import Services from "./Services.jsx"
import UserGreeting from "./UserGreeting.jsx"
import Contracts from "./Contracts.jsx"
import ListAdder from "./ListAdder.jsx"
import ToDoList from "./ToDoList.jsx"
import SetSize from "./SetSize.jsx"
import Clock from "./Clock.jsx"
import Component1 from "./Component1.jsx"
import RefComp from "./RefComp.jsx"
import StopWatch from "./StopWatch.jsx"

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
      <Clock></Clock>
      <Services></Services>
      <List items={companies} category="Companies we have worked with:"></List>
      <SiteCreation></SiteCreation>
      <Contracts></Contracts>
      <ListAdder></ListAdder>
      <ToDoList></ToDoList>
      <SetSize></SetSize>
      <Component1></Component1>
      <RefComp></RefComp>
      <StopWatch></StopWatch>
      <Button></Button>
      <Footer></Footer>
    </>
  )
}

export default App
