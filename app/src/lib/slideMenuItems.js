module.exports = [
    {
        type: 'item',
        icon: 'fa fa-th',
        name: 'Dashboard',
        router: {
            name: 'Dashboard'
        }
    },
    {
        type: 'item',
        icon: 'fa fa-th',
        name: 'Routes',
        router: {
            name: 'Routes'
        }
    },
    {
        type: 'tree',
        icon: 'fa fa-dashboard',
        name: 'Employee Hub',
        items: [{
                type: 'item',
                icon: 'fa fa-circle-o',
                name: 'Employees',
                router: {
                    name: 'Employees'
                }
            },
            {
                type: 'item',
                icon: 'fa fa-circle-o',
                name: 'Applicants',
                router: {
                    name: 'Applicants'
                }
            },
            {
                type: 'item',
                icon: 'fa fa-circle-o',
                name: 'Chat',
                router: {
                    name: 'Chat'
                }
            },
        ]
    }
    // {
    //   type: 'item',
    //   icon: 'fa fa-th',
    //   name: 'Log',
    //   router: {
    //     name: 'Model'
    //   }
    // },



]