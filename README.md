# Smart Fertilizer System

A web-based application that provides intelligent fertilizer recommendations based on soil and crop data using machine learning.

## Features

- **Fertilizer Prediction**: Get personalized fertilizer recommendations based on soil parameters and crop type
- **Chatbot Interface**: Interactive chatbot for easy fertilizer advice
- **Machine Learning Model**: Trained model for accurate predictions
- **Web Dashboard**: User-friendly web interface

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: HTML, CSS, JavaScript
- **Machine Learning**: Scikit-learn
- **Data Processing**: Pandas, NumPy

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/veerakumari810/Smart-fertilizer-system.git
   cd Smart-fertilizer-system
   ```

2. Install dependencies:
   ```bash
   pip install -r config/requirements.txt
   ```

3. Run the application:
   ```bash
   python app.py
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Usage

1. Access the web interface
2. Enter soil parameters (N, P, K levels, pH, etc.)
3. Select crop type
4. Get fertilizer recommendations
5. Use the chatbot for additional advice

## Project Structure

```
smart-fertilizer-system/
├── app.py                 # Main Flask application
├── config/
│   └── requirements.txt   # Python dependencies
├── data/
│   ├── raw/              # Raw data files
│   └── processed/        # Processed data
├── models/               # Trained ML models
├── src/
│   ├── api/              # API endpoints
│   ├── models/           # ML model training and prediction
│   └── utils/            # Helper functions
├── static/               # Static files (CSS, JS, images)
├── templates/            # HTML templates
└── tests/                # Unit tests
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.