import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


function LoginForm() {
    return (
        <div>
            <Grid container
                spacing={0} direction="column" alignItems="center"
                justify="center" style={{ minHeight: '100vh' }}>

                <Grid item xs={3}>
                    <LoginForm />
                </Grid>

            </Grid>
        </div>
    );
}

export default LoginForm;