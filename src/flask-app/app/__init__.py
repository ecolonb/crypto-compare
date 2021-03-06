# To avoid organizerImports and declarations, I created a pther file to initizalize
from .__server_socket__ import app, socketio, render_template, send, requestFlask
from app import views, api_views, socketio_views
from threading import Thread


task_coins = Thread(target=socketio_views.update_coins_from_api)
task_coins.start()


task_send_coins_value = Thread(
    target=socketio_views.send_current_coins_value())
task_send_coins_value.start()
