import AdminSidebar from '@/components/partials/AdminSidebar'
import AdminTopbar from '@/components/partials/AdminTopbar'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <>
        <AdminTopbar/>
        <AdminSidebar/>
        {children}
    </>
  )
}

export default AdminLayout