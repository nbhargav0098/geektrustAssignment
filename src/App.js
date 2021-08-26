import {Component} from 'react'
import DisplayEachUser from './components/DisplayEachUser'
import './App.css'

class App extends Component {
  state = {userDetails: [], searchInput: ''}

  componentDidMount() {
    this.fetchUserDetails()
  }

  fetchUserDetails = async () => {
    const userDetailsResponse = await fetch(
      `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`,
    )
    const responseData = await userDetailsResponse.json()
    const newList = responseData.map(eachItem => ({
      id: eachItem.id,
      email: eachItem.email,
      role: eachItem.role,
      name: eachItem.name,
    }))
    this.setState({userDetails: newList})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUserId = id => {
    const {userDetails} = this.state
    const newUsersData = userDetails.filter(eachItem => eachItem.id !== id)

    this.setState({
      userDetails: newUsersData,
    })
  }

  render() {
    const {userDetails, searchInput} = this.state
    const filteredResults = userDetails.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="background-container">
        <input
          type="search"
          className="search-input"
          onChange={this.onChangeInput}
          value={searchInput}
        />
        <ul>
          <div className="list-headings">
            <div className="li-heading-container">
              <input type="checkbox" />
            </div>
            <div className="li-heading-container">
              <p className="headings">Name</p>
            </div>
            <div className="li-heading-container">
              <p className="headings">Email</p>
            </div>
            <div className="li-heading-container">
              <p className="headings">Role</p>
            </div>
            <div className="li-heading-container">
              <p className="headings">Actions</p>
            </div>
          </div>
          <hr />
          {filteredResults.map(eachUserDetails => (
            <DisplayEachUser
              userDetails={eachUserDetails}
              key={eachUserDetails.id}
              deleteUserId={this.deleteUserId}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
