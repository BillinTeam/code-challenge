import app from './app';
import Config from './config';
import { populate } from './utils';




app.listen(Config.APP_PORT, () => {
  console.log(`App listening on port ${Config.APP_PORT}`); // eslint-disable-line no-console
  populate();
});
