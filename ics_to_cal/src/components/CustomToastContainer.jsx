import { ToastContainer } from 'react-toastify'
import React from 'react'

class CustomToastContainer extends ToastContainer {
  render() {
    return <ToastContainer position="bottom-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnVisibilityChange draggable pauseOnHover />
  }
}
export default CustomToastContainer
