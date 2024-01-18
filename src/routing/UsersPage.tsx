import { Outlet } from 'react-router-dom'
import UserList from './UserList'

export const UsersPage = () => {
    return (
        <div className="row">
            <div className="col">
                <UserList />
            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>
    )
}
