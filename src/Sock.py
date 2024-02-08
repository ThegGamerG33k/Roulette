import tornado.websocket

activeClients=[]

class Handler(tornado.websocket.WebSocketHandler):
    def open(self):
        print("open connection")
        activeClients.append(self)

    def on_message(self, msg):
        print("server got:", msg)
        for c in activeClients:
            c.write_message(msg)
            
    def on_close(self):
        activeClients.remove(self)

    def check_origin(self, *args):
        return True