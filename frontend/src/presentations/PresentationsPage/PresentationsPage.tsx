
import Grid from "@material-ui/core/Grid";
import PageTitle from "../../common/components/PageTitle/PageTitle";
import {Divider} from "@material-ui/core";
import PageContentContainer from "../../common/components/PageContentContainer/PageContentContainer";


const PresentationsPage = () => {
    // const presentations = useSelector(getPresentations);

    return (
        <Grid container direction="column">
            <Grid container justify="space-between" alignItems="center">
                <Grid item>
                    <PageTitle title="Presentations" />
                </Grid>
            </Grid>
            <Divider />
            <PageContentContainer>
                {/*<PresentationsList presentations={presentations} />*/}
            </PageContentContainer>
        </Grid>
    );
};

export default PresentationsPage;