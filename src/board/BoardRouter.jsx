import React from 'react';
import {Route} from 'react-router-dom';
import BoardList from './BoardList';
import BoardView from './BoardView';
import BoardAdd from './BoardAdd';

const BoardRouter = ({match , location}) => {
    return (
        <div>
            <Route exact path={match.path} component={BoardList} />
            <Route path={`${match.path}/:id`} component={BoardView} />
            <Route path={`${match.path}/add`} component={BoardAdd} />
        </div>
    )
}


export default BoardRouter;