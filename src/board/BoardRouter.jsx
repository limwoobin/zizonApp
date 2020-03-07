import React from 'react';
import {Route} from 'react-router-dom';
import Board from './Board';
import BoardView from './BoardView';

const BoardRouter = ({match , location}) => {
    return (
        <div>
            <Route exact path={match.path} component={Board} />
            <Route path={`${match.path}/:id`} component={BoardView} />
        </div>
    )
}


export default BoardRouter;