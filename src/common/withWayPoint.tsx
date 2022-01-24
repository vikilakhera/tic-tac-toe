import React, {useState} from 'react';
import { Waypoint } from 'react-waypoint';

function withWaypoint(Component:any) {
    function WithWaypoint(props:any){
        const [fade, setFade] = useState(false);
        return(
            <Waypoint onEnter={() => setFade(true)}>
                <div>
                    <Component fade={fade} {...props} />
                </div>
            </Waypoint>
        )
    }
    return WithWaypoint;
}

export default withWaypoint;