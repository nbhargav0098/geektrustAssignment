import {Component} from 'react'
import {IconContext} from 'react-icons'
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import './index.css'

class DisplayEachUser extends Component {
  render() {
    const {person} = this.props
    return (
      <li className="list-item">
        <div className="list-container">
          <input type="checkbox" />
        </div>
        <div className="list-container">
          <p className="details">{person.name}</p>
        </div>
        <div className="list-container">
          <p className="details">{person.email}</p>
        </div>
        <div className="list-container">
          <p className="details">{person.role.toUpperCase()}</p>
        </div>
        <div className="list-container">
          <div className="icons-container">
            <div className="icons">
              <IconContext.Provider
                value={{style: {fontSize: '14px', color: 'black'}}}
              >
                <div>
                  <FiEdit />
                </div>
              </IconContext.Provider>
            </div>
            <div className="icons">
              <IconContext.Provider
                value={{style: {fontSize: '17px', color: 'red'}}}
              >
                <div>
                  <AiOutlineDelete />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
export default DisplayEachUser
