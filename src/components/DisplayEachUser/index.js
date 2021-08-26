import {IconContext} from 'react-icons'
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import './index.css'

const DisplayEachUser = props => {
  const {userDetails, deleteUserId} = props
  const {name, id, email, role} = userDetails
  const onDeleteUser = () => {
    deleteUserId(id)
  }
  return (
    <>
      <li className="list-item" htmlFor={`checkbox${id}`}>
        <div className="list-container">
          <input type="checkbox" id={`checkbox${id}`} />
        </div>
        <div className="list-container">
          <p className="details">{name}</p>
        </div>
        <div className="list-container">
          <p className="details">{email}</p>
        </div>
        <div className="list-container">
          <p className="details">{role.toUpperCase()}</p>
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
                  <AiOutlineDelete onClick={onDeleteUser} />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </li>
      <hr />
    </>
  )
}
export default DisplayEachUser
