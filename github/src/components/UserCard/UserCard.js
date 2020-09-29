import React from 'react';

import * as MUI from '../../materialui/index';

import './User.css';

const UserCard = props => {
    const { user, graph } = props;

    return(
        <>
            <h2>Github User</h2>
            <MUI.Card className='user-card'>
                <MUI.CardHeader
                    className='card-header'
                    avatar={
                        <>
                            <MUI.Typography
                                className='card-title' 
                                variant='body2'
                                component='p'
                            >
                                {user.login}
                            </MUI.Typography>
                            <MUI.Typography
                                variant='body2'
                                component='p'
                            >
                                {user.bio}
                            </MUI.Typography>
                        </>
                    }
                    action={
                        <>
                            <MUI.Typography
                                variant='body1'
                                component='p'
                            >
                                Followers 
                            </MUI.Typography>
                            <MUI.Badge
                                badgeContent={user.followers}
                                color='primary'
                            />
                        </>
                    }
                />
                <MUI.CardContent>
                    <img src="http://ghchart.rshah.org/2016rshah" alt="2016rshah's Github chart" />
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default UserCard;