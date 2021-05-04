import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from "@material-ui/core/";

import {tlsa} from "./data/tsla";
import {CardMedia} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}));

export default function AltCard() {
    const classes = useStyles();
    const numbers = [1, 2, 3];

    return (
        <div className={classes.root}>
            {numbers.map((elem) => (
                <Grid key={elem.toString()}
                      container
                      spacing={2}
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                >
                    {tlsa.map((el) => (
                        <Grid item xs={3} key={el.title}>
                            <Card>
                                <Typography variant="h8" gutterBottom>

                                    <CardHeader

                                    />
                                    <CardContent>

                                        <img src={el.imageUrl} width={300} height={150}/>
                                        {el.title}
                                    </CardContent>

                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </div>
    );
}
