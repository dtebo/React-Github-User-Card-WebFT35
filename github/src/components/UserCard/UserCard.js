import React from 'react';

import * as MUI from '../../materialui/index';

const UserCard = props => {
    return(
        <>
            <h2>UserInfo Here...</h2>
            <MUI.Card>
                <MUI.CardContent>
                    <MUI.Typography variant='body2' component='p'>
                        Test
                    </MUI.Typography>
                </MUI.CardContent>
            </MUI.Card>
        </>
    );
};

export default UserCard;