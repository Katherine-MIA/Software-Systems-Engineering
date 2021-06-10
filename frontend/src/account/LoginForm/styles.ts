import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  error: {
    color: red[500],
    "&::before": {
      content: '"⚠ "',
    },
  },
  fullWidth: {
    width: "100%",
  },
  link: { fontSize: theme.typography.fontSize * 1.2 },
}));
