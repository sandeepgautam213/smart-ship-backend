# Use official Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy only requirements and install early
COPY src/ml/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy model code
COPY src/ml/ ./src/ml/

# Run the Flask API
CMD ["python", "src/ml/ml_api.py"]
