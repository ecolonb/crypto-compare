class CurrentStatusCoins():
    BTC = 0
    ETH = 0
    XRP = 0

    def get_current(self):
        return {
            "BTC": self.BTC,
            "ETH": self.ETH,
            "XRP": self.XRP
        }

    def set_coins(self, new_values):
        self.BTC = new_values["BTC"]
        self.ETH = new_values["ETH"]
        self.XRP = new_values["XRP"]
