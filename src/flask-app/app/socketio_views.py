from app import app, socketio, render_template, send
from datetime import datetime
from os import environ
from .current_status_coins import CurrentStatusCoins
import threading
import requests

current_value_coins = CurrentStatusCoins()


@app.route("/socketio-service-health")
def socketio_check_health():
    return render_template("socketio.html")


@socketio.on('message')
def socket_message(mssg):
    print("On Messages: ", mssg)


@socketio.on('updateCoin')
def update_coins(message):
    global mycounter
    print("Update-coins: ", message)

    now = datetime.now()
    current_time = now.strftime("%d/%m/%Y %H:%M:%S")
    socketio.emit("receivedUpdateCoin",
                  {"current_time": current_time, "otherValue": current_value_coins.get_current()})


def update_coins_from_api():
    to_convert = environ.get('CURRENCY_TO_CONVERT')
    api_key = environ.get('API_KEY')
    end_point = f'''https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms={to_convert}&api_key={api_key}'''
    r = requests.get(end_point)
    current_value_coins.set_coins(r.json())
    print("New values")
    print(current_value_coins.get_current())
    t1 = threading.Timer(60.0, update_coins_from_api)
    t1.start()
