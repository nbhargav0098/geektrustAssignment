import {Component} from 'react'
import DisplayEachUser from '../DisplayEachUser'
import './index.css'

class SearchUser extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {usersList} = this.props
    const filteredResults = usersList.filter(eachUser =>
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
          {filteredResults.map(eachUserDetails => (
            <DisplayEachUser
              person={eachUserDetails}
              key={eachUserDetails.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default SearchUser
