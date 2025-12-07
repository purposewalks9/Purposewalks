import React, { useContext } from 'react';
import { ThemeContext } from '../../content/themecontext.jsx';
import Navbar from '../../prop/navbar.jsx';
import CodeBlock from '../../prop/codeblock.jsx';
import { Undo2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const Sales = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  
  const cloneCode = `git clone https://github.com/purposewalks9/sales-report-software.git`;

  const installCode = `pip install pywhatkit pandas openpyxl`;

  const venvSetupCode = `python -m venv venv`;

  const activateWindowsCode = `venv\\Scripts\\activate`;

  const activateUnixCode = `source venv/bin/activate`;

  const runCode = `python cal.py`;

  const exampleReportCode = `Sales Report – April 27, 2025

Financial Summary
Total Sales (TS) → ₦223,000
Total Cost (TC) → ₦104,200
Staff Bill → ₦10,000

Total Expenses
TC + Staff Bill → ₦104,200 + ₦10,000 = ₦114,200

Profit Calculation
TS – Total Expenses → ₦223,000 − ₦114,200 = ₦108,800

Conclusion
The figures indicate a net profit of ₦108,800.`;

  const mainScriptCode = `import pandas as pd

# Define the product database
myvar = pd.DataFrame({
    "Products": [
        "André", "Blue Nun", "Don Julio", "Belaire", "Castel White", 
        "Martinelli's Cider", "Toma Wine", "Exotic", "Monster", 
        "Coca-Cola", "Water", "Mateus", "Carlo Rossi", "Campari Big",
        # ... more products
    ],
    "unit_price": [
        25000, 50000, 700000, 130000, 20000, 0, 18000, 5000, 4000, 
        1000, 500, 18000, 20000, 0,
        # ... more prices
    ],
    "Costprice": [
        12000, 35000, 400000, 70000, 10000, 0, 10000, 2000, 1500, 
        500, 200, 10000, 11000, 0,
        # ... more cost prices
    ],
})`;

  const uploadScriptCode = `import pandas as pd

def UPLOAD(file_type):
    file_type = file_type.lower()
    if file_type == "csv":
        path = input(f"Enter your {file_type} file path: ")
        data = pd.read_csv(path)
        return data
    elif file_type == "excel":
        path = input(f"Enter your {file_type} file path: ")
        data = pd.read_excel(path)
        return data
    else:
        print("Unsupported file type. Please use csv or excel.")
        return None`;

  const calScriptCode = `import pandas as pd
import openpyxl
from Upload import UPLOAD
from main import myvar
import pywhatkit as p
import datetime
import time

# Ask user for file type
file_type = input("What type of file do you have? (csv/excel): ").strip()

# Upload stock data
stock_data = UPLOAD(file_type)
if stock_data is not None:
    # Merge the uploaded stock data with the product database
    final_data = pd.concat([myvar, stock_data], axis=1)
    
    # Create calculated columns
    final_data["TotalSales"] = final_data["unit_price"] * final_data["Quantity Sold"]
    final_data["Totalcost"] = final_data["Costprice"] * final_data["Quantity Sold"]
    final_data["Expense"] = final_data["Bill"] + final_data["Ex"] + final_data["Totalcost"]
    
    # Calculate totals
    total_expenses = final_data["Expense"].sum()
    total_sales = final_data["TotalSales"].sum()
    result = total_sales - total_expenses
    
    # Determine profit or loss
    if result < 0:
        conclusion = f"Loss of ₦{abs(result):,.0f}."
    else:
        conclusion = f"Net profit of ₦{result:,.0f}."
    
    # Get today's date
    today = datetime.datetime.now().strftime("%B %d, %Y")
    
    # Prepare the message
    message = f"""
Sales Report – {today}

Financial Summary
Total Sales (TS) → ₦{total_sales:,.0f}
Total Cost (TC) → ₦{final_data['Totalcost'].sum():,.0f}
Staff Bill → ₦{final_data['Bill'].sum():,.0f}

Total Expenses
TC + Staff Bill → ₦{final_data['Totalcost'].sum():,.0f} + ₦{final_data['Bill'].sum():,.0f} = ₦{total_expenses:,.0f}

Profit Calculation
TS – Total Expenses → ₦{total_sales:,.0f} − ₦{total_expenses:,.0f} = ₦{result:,.0f}

Conclusion
The figures indicate a {conclusion}
"""
    
    print("\\nGenerated Sales Report:\\n")
    print(message)
    
    # Save report as Excel
    output_file = input("Enter file name to save (example: report.xlsx): ").strip()
    if not output_file.endswith(".xlsx"):
        output_file += ".xlsx"
    final_data.to_excel(output_file, index=False)
    print(f"File saved as {output_file}")
    
    # Send message to WhatsApp
    now = datetime.datetime.now()
    current_hour = now.hour
    current_minute = now.minute + 2
    
    if current_minute >= 60:
        current_minute -= 60
        current_hour += 1
    if current_hour >= 24:
        current_hour = 0
    
    phone_number = input("Enter receiver WhatsApp number (e.g. +2348012345678): ").strip()
    print("Sending message...")
    p.sendwhatmsg(phone_number, message, current_hour, current_minute)
else:
    print("No data uploaded. Exiting...")`;

  const csvFormatCode = `Product,Quantity Sold,Bill,Ex
André,5,5000,1000
Blue Nun,3,0,500
Don Julio,1,0,0
Water,20,0,0`;

  return (
    <div className={`min-h-screen ${darkMode ? 'text-gray-300' : 'bg-white text-gray-700'}`}>
         <Fade direction="left"  duration={1600} triggerOnce>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-20">
        <div className=" mt-10 md:mt-20  lg:mt-20">
                        <div className={`flex flex-row p-2 cursor-pointer rounded-full max-w-20 ${darkMode ? 'text-black bg-white hover:bg-gray-400' : 'bg-black text-white hover:bg-gray-700'} items-center mb-10`} onClick={() => { navigate('/blog'); }}>
                            <Undo2 size={14} />
                            <p className="text-sm ml-2">Back</p>
                        </div>
        {/* Overview */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Description</h2>
          <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            The Sales Report Software is a Python-based tool designed to automate the process of generating 
            and sending daily or periodic sales reports. It can:
          </p>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>• Generate financial summaries for businesses</li>
            <li>• Automatically send sales reports via WhatsApp</li>
            <li>• Attach and save sales data in Excel files (optional)</li>
          </ul>
          <p className={`text-sm leading-relaxed mt-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            This tool is ideal for businesses that need regular reports without manual intervention.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>🛠 Features</h2>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>•  <strong>WhatsApp Messaging:</strong> Automatically sends sales updates to a specified WhatsApp number</li>
            <li>•  <strong>Smart Scheduling:</strong> Automatically calculates the time to send the report, ensuring it's sent at the correct moment</li>
            <li>•  <strong>Excel Integration:</strong> Saves the financial summary as an Excel file (optional)</li>
            <li>• <strong>Security:</strong> Uses WhatsApp Web for sending messages, ensuring secure communication</li>
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Requirements</h2>
          <ul className={`space-y-1 font-mono text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>• Python 3.8 or higher</li>
            <li>• pywhatkit</li>
            <li>• pandas</li>
            <li>• openpyxl</li>
            <li>• Active internet connection</li>
          </ul>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}> Installation</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 1: Clone the Repository</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Clone or download this repository to your local machine:
              </p>
              <CodeBlock code={cloneCode} language="bash" darkMode={darkMode} />
            </div>

            <div>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 2: Install Dependencies</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Install the required Python libraries:
              </p>
              <CodeBlock code={installCode} language="bash" darkMode={darkMode} />
            </div>

            <div>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 3: Set Up Virtual Environment</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Create and activate a virtual environment:
              </p>
              <CodeBlock code={venvSetupCode} language="bash" darkMode={darkMode} />
              
              <p className={`text-xs font-semibold mb-1 mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Windows:
              </p>
              <CodeBlock code={activateWindowsCode} language="bash" darkMode={darkMode} />
              
              <p className={`text-xs font-semibold mb-1 mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                macOS/Linux:
              </p>
              <CodeBlock code={activateUnixCode} language="bash" darkMode={darkMode} />
            </div>

            <div>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 4: Run the Software</h3>
              <CodeBlock code={runCode} language="bash" darkMode={darkMode} />
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>⚙ Configuration</h2>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            You can customize the following:
          </p>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>• <strong>Phone number:</strong> Enter the recipient's WhatsApp number (including country code) where the report will be sent</li>
            <li>• <strong>Input file:</strong> Upload a CSV or Excel file for your stock data</li>
            <li>• <strong>Report Format:</strong> The report contains sales summary and profit calculations. You can modify the message format in the cal.py script</li>
          </ul>
        </section>

        {/* Data Format */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Input Data Format</h2>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Your CSV or Excel file should contain the following columns:
          </p>
          <CodeBlock code={csvFormatCode} language="bash" darkMode={darkMode} />
          <div className={`mt-3 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            <p>• <strong>Product:</strong> Name of the product sold</p>
            <p>• <strong>Quantity Sold:</strong> Number of units sold</p>
            <p>• <strong>Bill:</strong> Staff or operational bills</p>
            <p>• <strong>Ex:</strong> Additional expenses</p>
          </div>
        </section>

        {/* Example Report */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Example Sales Report</h2>
          <CodeBlock code={exampleReportCode} language="bash" darkMode={darkMode} />
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>How It Works</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Product Database (main.py)</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Stores your product catalog with unit prices and cost prices.
              </p>
              <CodeBlock code={mainScriptCode} language="python" darkMode={darkMode} />
            </div>

            <div>
              <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. File Upload Module (Upload.py)</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Handles CSV and Excel file uploads for sales data.
              </p>
              <CodeBlock code={uploadScriptCode} language="python" darkMode={darkMode} />
            </div>

            <div>
              <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. Main Calculator (cal.py)</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Processes sales data, calculates profits, generates reports, and sends via WhatsApp.
              </p>
              <CodeBlock code={calScriptCode} language="python" darkMode={darkMode} />
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Troubleshooting</h2>
          <div className="space-y-3">
            <div>
              <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>WhatsApp Web not opening</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Ensure you have an active internet connection and Chrome/Chromium browser installed. PyWhatKit uses WhatsApp Web.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>File path errors</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Use absolute file paths or ensure your CSV/Excel file is in the same directory as the script.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Module not found error</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Verify that all dependencies are installed: <code className="font-mono">pip install pywhatkit pandas openpyxl</code>
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Data mismatch errors</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Ensure your input file has the correct column names: Product, Quantity Sold, Bill, Ex
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

export default Sales;