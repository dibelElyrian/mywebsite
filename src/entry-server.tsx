import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { HeadProvider, type HeadCollector } from "./lib/head";

export function render(url: string) {
  const headTags: string[] = [];
  const collector: HeadCollector = {
    add: (tag) => headTags.push(tag)
  };

  const appHtml = renderToString(
    <HeadProvider collector={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadProvider>
  );

  return {
    appHtml,
    headTags: headTags.join("\n")
  };
}
