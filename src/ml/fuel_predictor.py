# src/ml/fuel_predictor.py

from sklearn.linear_model import LinearRegression
import numpy as np

class FuelPredictor:
    def __init__(self):
        # Dummy training data: [distance, cargo_weight]
        X = np.array([
            [1000, 20000],
            [1500, 25000],
            [2000, 30000],
            [1800, 22000],
        ])
        y = np.array([5000, 7000, 9500, 8000])  # fuel in liters

        self.model = LinearRegression()
        self.model.fit(X, y)

    def predict(self, distance, cargo_weight, weather_factor=1.0):
        fuel = self.model.predict([[distance, cargo_weight]])[0]
        return round(fuel * weather_factor, 2)
