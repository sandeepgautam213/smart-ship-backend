from flask import Flask, request, jsonify
from fuel_predictor import FuelPredictor
from route_optimizer import RouteOptimizer
from maintenance_forecaster import MaintenanceForecaster

# Initialize Flask app and models
app = Flask(__name__)
fuel_model = FuelPredictor()
route_model = RouteOptimizer()
maintenance_model = MaintenanceForecaster()

@app.route('/predict/fuel', methods=['POST'])
def predict_fuel():
    data = request.json
    distance = data.get('distance', 1000)
    weight = data.get('cargo_weight', 20000)
    weather = data.get('weather', 'moderate')

    # Adjust factor based on weather
    factor = 1.2 if weather == 'rough' else 1.0
    fuel_estimate = fuel_model.predict(distance, weight, factor)
    
    return jsonify({'fuel_estimate': fuel_estimate})

@app.route('/predict/route', methods=['POST'])
def predict_route():
    data = request.json
    origin = data.get('origin', 'Singapore')
    destination = data.get('destination', 'Dubai')
    weight = data.get('cargo_weight', 20000)
    weather = data.get('weather', 'moderate')

    route = route_model.optimize(origin, destination, weight, weather)
    return jsonify(route)

@app.route('/predict/maintenance', methods=['POST'])
def predict_maintenance():
    data = request.json
    usage_hours = data.get('usage_hours', 2000)
    
    maintenance = maintenance_model.forecast(usage_hours)
    return jsonify(maintenance)

if __name__ == '__main__':
    app.run(port=8000)
