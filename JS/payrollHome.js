window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    
               innerHtml = `${innerHtml}
               <tr>
                   <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                   <td>${empPayrollData._name}</td>
                   <td>${empPayrollData._gender}</td>
                   <td>${getDeptHtml(empPayrollData._department)}</td>
                   <td>${empPayrollData._salary}</td>
                   <td>${empPayrollData._startDate}</td>
                   <td>
                       <img name="${empPayrollData._id}" onclick="remove(this)"src="/ClientServerArchitecture/assets/icons/delete-black-18dp.svg">
                       <img name="${empPayrollData._id}" onclick="update(this)" src="/ClientServerArchitecture/assets/icons/create-black-18dp.svg">
                   </td>
               </tr>      
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollList = [{
            _name: 'Shristy',
            _gender: 'Female',
            _department: ['Engineering', 'Sales'],
            _salary: '200000',
            _startDate: '29 oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/ClientServerArchitecture/assets/profile-images/Ellipse -4.png'
        },
        {
            _name: 'Atul',
            _gender: 'male',
            _department: ['HR'],
            _salary: '300000',
            _startDate: '1 jan 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/ClientServerArchitecture/assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Swadha',
            _gender: 'Female',
            _department: ['Sales'],
            _salary: '300000',
            _startDate: '7 aug 2021',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '/ClientServerArchitecture/assets/profile-images/Ellipse -7.png'
        }
    ];
    return empPayrollList;
} 