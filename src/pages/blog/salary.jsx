import React, { useContext } from 'react';
import { ThemeContext } from '../../content/themecontext.jsx';
import Navbar from '../../prop/navbar.jsx';
import CodeBlock from '../../prop/codeblock.jsx';
import { Undo2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const Salary = () => {
  const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();
  const installCode = `# Clone the repository
git clone https://github.com/purposewalks9/Salary_predictor.git
cd Salary_predictor

# Install required packages
pip install torch matplotlib numpy`;

  const dataFormatCode = `years_experience,salary
1.0,40000
1.1,39343
1.3,46205
1.5,37731
2.0,43525
2.2,39891
2.9,56642
3.0,60150
3.2,54445`;

  const runModelCode = `python salary_model.py

# Output:
# Saving model to: salary_model/Salary_model_2.pth
# Loading model... Done!
# Visualize
# Enter(Yes/no):`;

  const dataLoadingCode = `import torch

# Load Data from CSV
with open("Data.csv", "r") as file:
    lines = file.readlines()

# Parse CSV data (skip header)
data = [line.strip().split(",") for line in lines[1:]]

# Extract features (years) and labels (salary)
X = [[float(row[0])] for row in data]  
y = [[float(row[1])] for row in data]

# Convert to PyTorch tensors
X_train = torch.tensor(X, dtype=torch.float)
y_train = torch.tensor(y, dtype=torch.float)`;

  const dataSplitCode = `# 80/20 train-test split
train_split = int(0.8 * len(X_train))

# Split into training and testing sets
train_year = X_train[:train_split]
train_salary = y_train[:train_split]
test_year = X_train[train_split:]
test_salary = y_train[train_split:]`;

  const modelArchitectureCode = `from torch import nn

class LinearRegressionmodel(nn.Module):
    def __init__(self):
        super().__init__()
        # Initialize random weight and bias
        self.weight = nn.Parameter(
            torch.rand(1, dtype=torch.float),
            requires_grad=True
        )
        self.bias = nn.Parameter(
            torch.rand(1, dtype=torch.float),
            requires_grad=True
        )
    
    def forward(self, input_data: torch.tensor) -> torch.tensor:
        # Linear equation: y = weight * x + bias
        return self.weight * input_data + self.bias`;

  const trainingCode = `# Set random seed for reproducibility
torch.manual_seed(42)

# Initialize model
model = LinearRegressionmodel()

# Define loss function and optimizer
loss_function = nn.MSELoss()
optimizer = torch.optim.SGD(params=model.parameters(), lr=0.0001)

# Training loop
epochs = 1000
for epoch in range(epochs):
    model.train()
    
    # Forward pass
    predictions = model(train_year)
    
    # Calculate loss
    loss = loss_function(predictions, train_salary)
    
    # Backward pass
    optimizer.zero_grad()
    loss.backward()
    
    # Update parameters
    optimizer.step()`;

  const savingModelCode = `import os
from pathlib import Path

# Create directory if it doesn't exist
if not os.path.exists("salary_model"): 
    MODEL_PATH = Path("salary_model")
    MODEL_PATH.mkdir(parents=True, exist_ok=True)
    
    MODEL_NAME = "Salary_model_2.pth"
    MODEL_SAVE_PATH = MODEL_PATH / MODEL_NAME
    
    print(f"Saving model to: {MODEL_SAVE_PATH}")
    torch.save(obj=model.state_dict(), f=MODEL_SAVE_PATH)`;

  const testingCode = `# Switch to evaluation mode
model.eval()

# Make predictions without gradient calculation
with torch.inference_mode():
    preds = model(test_year)`;

  const visualizationCode = `import matplotlib.pyplot as plt

def plot_predictions(train_data=train_year, 
                     train_labels=train_salary, 
                     test_data=test_year, 
                     test_labels=test_salary, 
                     predictions=None):
    plt.figure(figsize=(10, 7))
    
    # Plot training data (blue)
    plt.scatter(train_data.numpy(), train_labels.numpy(), 
                c="b", s=4, label="Training data")
    
    # Plot testing data (green)
    plt.scatter(test_data.numpy(), test_labels.numpy(), 
                c="g", s=4, label="Testing data")
    
    # Plot predictions (red)
    if predictions is not None:
        plt.scatter(test_data.numpy(), predictions.detach().numpy(), 
                    c="r", s=4, label="Predictions")
    
    plt.legend(prop={"size": 14})
    plt.show()

# Display visualization
plot_predictions(predictions=preds)`;

  const loadModelCode = `# Load a saved model
model = LinearRegressionmodel()
model.load_state_dict(torch.load("salary_model/Salary_model_2.pth"))
model.eval()

# Make predictions
with torch.inference_mode():
    new_prediction = model(torch.tensor([[5.0]]))
    print(f"Predicted salary for 5 years: ")`;

  const hyperparametersCode = `# Modify these values for experimentation
lr = 0.0001          # Learning rate
epochs = 1000        # Training iterations
train_split = 0.8    # Train/test ratio (80/20)

# Create optimizer with custom learning rate
optimizer = torch.optim.SGD(params=model.parameters(), lr=lr)`;

  return (
      <div className={`min-h-screen ${darkMode ? ' text-gray-300' : 'bg-white text-gray-700'}`}>
         <Fade direction="up" delay={50} duration={1600} triggerOnce>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-20">
        <div className=" mt-10 md:mt-20  lg:mt-20">
        <div className={`flex flex-row p-2 cursor-pointer rounded-full max-w-20 ${darkMode ? 'text-black bg-white hover:bg-gray-400' : 'bg-black text-white hover:bg-gray-700'} items-center mb-10`} onClick={() => { navigate('/blog'); }}>
                           <Undo2 size={14} />
                           <p className="text-sm ml-2">Back</p>
                       </div>
          {/* About */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Description</h2>
            <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              This project implements a simple yet effective linear regression model to predict salary outcomes 
              based on years of experience. The model uses PyTorch's neural network framework and provides 
              visualization capabilities to understand the relationship between experience and salary.
            </p>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Built with PyTorch, this educational project demonstrates fundamental machine learning concepts 
              including data preprocessing, model training, evaluation, and visualization.
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Key Features</h2>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>• Custom PyTorch linear regression model with learnable parameters</li>
              <li>• Interactive data visualization with matplotlib</li>
              <li>• Automatic model saving and loading capabilities</li>
              <li>• 80/20 train-test split for proper evaluation</li>
              <li>• MSE loss function optimization</li>
              <li>• Simple CSV data input format</li>
            </ul>
          </section>

          {/* Requirements */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Requirements</h2>
            <ul className={`space-y-1 font-mono text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>• torch</li>
              <li>• matplotlib</li>
              <li>• numpy</li>
              <li>• pathlib</li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Installation</h2>
            <CodeBlock code={installCode} language="bash" darkMode={darkMode} />
          </section>

          {/* Data Format */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Data Format</h2>
            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Create a <code className="font-mono">Data.csv</code> file in the project directory with the following format:
            </p>
            <CodeBlock code={dataFormatCode} language="bash" darkMode={darkMode} />
            <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Column 1: Years of experience (numeric) | Column 2: Salary (numeric)
            </p>
          </section>

          {/* Usage */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Usage</h2>
            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Run the model training script:
            </p>
            <CodeBlock code={runModelCode} language="bash" darkMode={darkMode} />
            <p className={`text-sm mt-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The script will load data, train the model, save it, and optionally display visualization plots.
            </p>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>How the Model Works</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Data Loading</h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  The script reads CSV data, parses it, and converts it to PyTorch tensors for training.
                </p>
                <CodeBlock code={dataLoadingCode} language="python" darkMode={darkMode} />
              </div>

              <div>
                <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. Train-Test Split</h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Data is split into 80% training and 20% testing to evaluate model performance.
                </p>
                <CodeBlock code={dataSplitCode} language="python" darkMode={darkMode} />
              </div>

              <div>
                <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. Model Architecture</h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  A simple linear regression model implementing the equation: <code className="font-mono">y = weight * x + bias</code>
                </p>
                <CodeBlock code={modelArchitectureCode} language="python" darkMode={darkMode} />
              </div>

              <div>
                <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>4. Training Loop</h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  The model learns optimal weight and bias values through gradient descent optimization.
                </p>
                <CodeBlock code={trainingCode} language="python" darkMode={darkMode} />
              </div>

              <div>
                <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>5. Saving the Model</h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Trained model weights are saved to disk for future use without retraining.
                </p>
                <CodeBlock code={savingModelCode} language="python" darkMode={darkMode} />
              </div>

              <div>
                <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>6. Testing & Evaluation</h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  The model makes predictions on unseen test data to evaluate performance.
                </p>
                <CodeBlock code={testingCode} language="python" darkMode={darkMode} />
              </div>

              <div>
                <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>7. Visualization</h3>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Interactive plots show training data (blue), test data (green), and predictions (red).
                </p>
                <CodeBlock code={visualizationCode} language="python" darkMode={darkMode} />
              </div>
            </div>
          </section>

          {/* Training Configuration */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Training Configuration</h2>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>• <strong>Optimizer:</strong> Stochastic Gradient Descent (SGD)</li>
              <li>• <strong>Learning Rate:</strong> 0.0001</li>
              <li>• <strong>Loss Function:</strong> Mean Squared Error (MSE)</li>
              <li>• <strong>Epochs:</strong> 1000</li>
              <li>• <strong>Train/Test Split:</strong> 80/20</li>
            </ul>
          </section>

          {/* Customization */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Customization</h2>
            
            <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Adjusting Hyperparameters</h3>
            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Modify these variables to experiment with different training configurations:
            </p>
            <CodeBlock code={hyperparametersCode} language="python" darkMode={darkMode} />

            <h3 className={`text-base font-semibold mb-2 mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Loading a Saved Model</h3>
            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Use a previously trained model for predictions without retraining:
            </p>
            <CodeBlock code={loadModelCode} language="python" darkMode={darkMode} />
          </section>

          {/* Model Performance */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Model Performance</h2>
            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The model learns a linear relationship between years of experience and salary. 
              Performance can be evaluated through:
            </p>
            <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>• Visual inspection of prediction plots</li>
              <li>• MSE loss values during training</li>
              <li>• Comparison between actual and predicted values on test set</li>
              <li>• Residual analysis (difference between predicted and actual)</li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Troubleshooting</h2>
            <div className="space-y-3">
              <div>
                <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>ModuleNotFoundError</h3>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Install missing packages using <code className="font-mono">pip install torch matplotlib numpy</code>
                </p>
              </div>
              <div>
                <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>File not found error</h3>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Ensure <code className="font-mono">Data.csv</code> exists in the project directory
                </p>
              </div>
              <div>
                <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Visualization not showing</h3>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Check matplotlib backend. The script uses TkAgg backend for compatibility
                </p>
              </div>
              <div>
                <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Poor predictions</h3>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Try increasing epochs or adjusting learning rate. Ensure data has clear linear relationship
                </p>
              </div>
            </div>
          </section>
        </div>
        </main>
        </Fade>

        {/* Fixed Bottom navbar */}
        <div className="fixed bottom-10 left-0 right-0 z-50">
          <Navbar />
        </div>
      </div>
  
  );
};

export default Salary;