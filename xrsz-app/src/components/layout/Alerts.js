import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
    const alertContext = useContext(AlertContext);

 
    return (
        // check to see if there is any alerts in the array, greater than 0, map. 
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert =>(
            <div key={alert.id} className={alert.type} >
                {alert.msg}
            </div>
        ))
    )
}

export default Alerts;