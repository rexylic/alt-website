Bun.serve({
  port: 3000,
  async fetch(req) {
    const path = new URL(req.url).pathname;
    let filePath = "." + (path === "/" ? "/index.html" : path);

    let file = Bun.file(filePath);
    if (!(await file.exists())) {
      file = Bun.file(filePath + ".html");
    }
    return new Response(file);
  },
});
