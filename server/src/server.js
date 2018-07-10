import app from './app';
import Config from './config';

app.listen(Config.APP_PORT, () => {
  console.log(`App listening on port ${Config.APP_PORT}`); // eslint-disable-line no-console
});
