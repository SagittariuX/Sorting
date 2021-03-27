import React from 'react';
import './css/sortingcontroller.css'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

const SortingController = () => {
    return ( 
        <>
        <div className='row'>
            <div className='sorting-ground-controller-player'>
                <SkipPreviousIcon />
                <PlayCircleFilledIcon />
                <SkipNextIcon />
            </div>
        </div>
        </>
    );
}
 
export default SortingController;