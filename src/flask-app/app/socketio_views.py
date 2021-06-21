from app import app, socketio, render_template, send, requestFlask
from datetime import datetime
from os import environ
from .current_status_coins import CurrentStatusCoins
import threading
import requests

current_value_coins = CurrentStatusCoins()


@app.route("/socketio-service-health")
def socketio_check_health():
    return render_template("socketio.html")


@socketio.on('firstUpdate')
def socket_message(mssg):
    sid = requestFlask.sid
    response = get_response("firstUpdate")
    socketio.emit("updateCoins", response, room=sid)


def send_current_coins_value():
    response = get_response()
    socketio.emit("updateCoins", response)
    t1 = threading.Timer(15.0, send_current_coins_value)
    t1.start()


def get_response(from_fn="worker"):
    now = datetime.now()
    current_time = now.strftime("%Y-%m-%dT%H:%M:%SZ")
    return {"current_time": current_time, "from": from_fn,
            "coins_value": current_value_coins.get_current()}


def update_coins_from_api():
    to_convert = environ.get('CURRENCY_TO_CONVERT')
    api_key = environ.get('API_KEY')
    end_point = f'''https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms={to_convert}&api_key={api_key}'''
    r = requests.get(end_point)
    current_value_coins.set_coins(r.json())
    t1 = threading.Timer(60.0, update_coins_from_api)
    t1.start()
