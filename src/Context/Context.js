import { createContext, useState } from "react";

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [users, setUsers] = useState([])
    const [pageNo, setPageNo] = useState(0)
    const [pages, setPages] = useState([])
    const [selected, setSelected] = useState([])
    const [page, setPage] = useState([])
    const [selectionAll, setSelectionAll] = useState(false)

    return (
        <UserContext.Provider value={{
            selectionAll,
            setSelectionAll,
            page,
            setPage,
            selected,
            setSelected,
            users,
            setUsers,
            pageNo,
            setPageNo,
            pages,
            setPages
        }}>
            {children}
        </UserContext.Provider>
    )
}