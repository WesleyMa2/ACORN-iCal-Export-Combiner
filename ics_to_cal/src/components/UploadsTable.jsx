import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types'

class UploadsTable extends React.Component {
  
  static get propTypes() {
    return {
      schedules: PropTypes.array
    }
  }

  render() {
    var scheduleArr = this.props.schedules.map(schedule => {
      return (
        <tr key={schedule.id}>
          <th scope="row">{schedule.id}</th>
          <td>{schedule.name}</td>
          <td>{schedule.file}</td>
        </tr>
      )
    })

    return (
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {scheduleArr}
        </tbody>
      </Table>
    );
  }
}
export default UploadsTable