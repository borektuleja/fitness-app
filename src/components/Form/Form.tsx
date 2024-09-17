import { withStyles } from "@/utils";

import * as styles from "./styles";

export default withStyles("form", styles.wrapper);

export const FormMessage = withStyles("span", styles.message);
