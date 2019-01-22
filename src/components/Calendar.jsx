import React from 'react'
import PropTypes from 'prop-types'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import { Container } from 'reactstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';

/**
 * A react component that displays the new schedule in a work week calendar
 */
moment.locale("en");
const localizer = BigCalendar.momentLocalizer(moment)
class Calendar extends React.Component {
  static get propTypes() {
    return {
      schedule: PropTypes.object
    }
  }

  render() {
    return (
      <Container fluid>
        <BigCalendar
          style={{ height: 600}}
          className="scrollable"
          startAccessor="start"
          endAccessor="end"
          defaultView={'work_week'}
          views={['day', 'agenda', 'work_week']}
          events={[]}
          localizer={localizer}
        />
      </Container>
    )

  }
}
export default Calendar
