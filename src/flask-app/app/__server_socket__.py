from flask import Flask, render_template, request as requestFlask
from flask_cors import CORS

from flask_socketio import SocketIO, send
from os import environ

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = environ.get('SECRET_KEY')
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='threading')
