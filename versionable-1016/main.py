#!/usr/bin/env python
import sys
import os
sys.path.insert(1, os.path.join(os.path.abspath('.'), 'lib'))


from flask import Flask, jsonify, session

app = Flask(__name__)

@app.route('/version/<commit>', methods=["GET"])
def version(commit):
    return app.make_response("""<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN">
<html>
  <head>
    <base href="https://cdn.rawgit.com/Malvolio/versionable-demo/%s/public/"/>
    <title>Demonstration of Versionable Concept</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.min.js"></script>
    <script src="app.js"></script>
  </head>
  <body ng-app="versionableDemo">
    <div ng-include="'login.html'"></div>
  </body>
</html>""" % commit)


