import React, { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { loadUsers } from "../usersAction"

const Users: FC = () => {
  const dispatch = useAppDispatch()

  const { data, isLoading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  return (
    <div>
      <h1>User</h1>
      {data.map((el) => (
        <ul>
          {el.first_name} {el.last_name}
        </ul>
      ))}
    </div>
  )
}

export default Users
