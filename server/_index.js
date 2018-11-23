import { StaticRouter as Router } from 'react-router-dom';
import App from '../src/App';

// you can use `async` function too
function handleUniversalRender(req, res) {
  const context = {};
  const stream = ReactDOMServer.renderToNodeStream(
    <Router location={req.url} context={context}>
      <App />
    </Router>
  );

  if (context.url) {
    res.redirect(301, context.url);
    return;
  }

  return stream;
}

const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender
});
