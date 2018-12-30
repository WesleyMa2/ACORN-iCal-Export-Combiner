import { ToastContainer } from 'react-toastify'
import React from 'react'

/**
 * Custom class to define the toast mechanism
 */
class CustomToastContainer extends ToastContainer {
  render() {
    return <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnVisibilityChange draggable pauseOnHover />
  }
}
export default CustomToastContainer
