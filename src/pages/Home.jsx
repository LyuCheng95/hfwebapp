import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
export default function Home() {
    return (
        <Grid container>
            <Grid item xs={7}>
                <Card>
                    <HomeCarousel />
                </Card>
            </Grid>
        </Grid>
    );
}