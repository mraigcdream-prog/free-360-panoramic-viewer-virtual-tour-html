#!/usr/bin/env python3
"""Xem trước trang tĩnh với URL sạch giống Firebase Hosting.

    python3 tools/preview.py
    mở http://127.0.0.1:8080

/can-ho/a1 được phục vụ từ public/can-ho/a1.html.
"""
import argparse
import os
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlparse

ROOT = os.path.realpath(os.path.join(os.path.dirname(__file__), "..", "public"))


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        self._dispatch()

    def do_HEAD(self):
        self._dispatch()

    def _safe(self, path):
        path = os.path.realpath(path)
        if path != self.directory and not path.startswith(self.directory + os.sep):
            return None
        return path

    def _dispatch(self):
        parsed = urlparse(self.path)
        rel = unquote(parsed.path)
        if rel != "/" and rel.endswith("/"):
            rel = rel[:-1]
        rel = rel.lstrip("/")
        candidates = []
        if rel == "":
            candidates.append(os.path.join(self.directory, "index.html"))
        else:
            base = os.path.join(self.directory, rel)
            candidates.extend([base, base + ".html", os.path.join(base, "index.html")])
        found = None
        for candidate in candidates:
            candidate = self._safe(candidate)
            if candidate and os.path.isfile(candidate):
                found = candidate
                break
        if not found:
            error_page = os.path.join(self.directory, "404.html")
            body = open(error_page, "rb").read() if os.path.isfile(error_page) else b"404"
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(body)
            return
        relative = os.path.relpath(found, self.directory).replace(os.sep, "/")
        query = ("?" + parsed.query) if parsed.query else ""
        self.path = "/" + relative + query
        if self.command == "HEAD":
            super().do_HEAD()
        else:
            super().do_GET()


def main():
    parser = argparse.ArgumentParser(description="Xem trước public/ với URL sạch")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8080)
    args = parser.parse_args()
    handler = partial(Handler, directory=ROOT)
    server = ThreadingHTTPServer((args.host, args.port), handler)
    print(f"Đang phục vụ {ROOT}")
    print(f"Mở http://{args.host}:{args.port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nĐã dừng.")


if __name__ == "__main__":
    main()
