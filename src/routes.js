import * as path from './routerPath';
import Nav from './Nav'
import Projects from './Projects'
import Employees from './Employees'
import Task from './Task'
import Timesheet from './Timesheet'
import Timesheetview from './Timesheetview'


export const routes=[
    {
        path:path.company,
        component:Nav
    },
    {
        path:path.projects,
        component:Projects
    },
    {
        path:path.employees,
        component:Employees,
        // emplo:path.divs
    },
    {
        path:path.task,
        component:Task
    },
    {
        path:path.timesheet,
        component:Timesheet
    },
    {
        path:path.timesheetview,
        component:Timesheetview
    }
]
