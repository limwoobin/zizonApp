import React from 'react';
import {Route} from 'react-router-dom';
import BoardList from './BoardList';
import BoardView from './BoardView';

const BoardRouter = ({match , location}) => {
    return (
        <div>
            <Route exact path={match.path} component={BoardList} />
            <Route path={`${match.path}/:id`} component={BoardView} />
        </div>
    )
}


export default BoardRouter;