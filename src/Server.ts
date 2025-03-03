import app from "./App";
import { config } from "./config/env";

app.listen(config.PORT, () => {
  console.log(`Server running at port ${config.PORT}`);
});
