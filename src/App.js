import {Component} from 'react'
import SearchUser from './components/SearchUser'
import './App.css'

class App extends Component {
  state = {userDetails: []}

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    const userDetailsResponse = await fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`,
    )
    const userDetails = await userDetailsResponse.json()
    this.setState({userDetails})
  }

  render() {
    const {userDetails} = this.state
    return <SearchUser usersList={userDetails} />
  }
}

export default App
