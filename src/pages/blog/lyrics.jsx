import React, { useContext } from 'react';
import { ThemeContext } from '../../content/themecontext.jsx';
import Navbar from '../../prop/navbar.jsx';
import CodeBlock from '../../prop/codeblock.jsx';
import { Undo2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
const Lyrics = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  
  const cloneCode = `git clone https://github.com/purposewalks9/lyrics-finder.git`;

  const setupCode = `cd lyrics-finder

# Create a virtual environment
python -m venv venv`;

  const activateWindowsCode = `venv\\Scripts\\activate`;

  const activateUnixCode = `source venv/bin/activate`;

  const installCode = `pip install requests`;

  const runCode = `python find.py`;

  const exampleOutputCode = `Lyrics Finder
Artist name: Ed Sheeran
Song title: Shape of You
Searching......
Now searching for 'Shape of You' by Ed Sheeran

Lyrics found:

[The lyrics will be displayed here...]`;

  const mainScriptCode = `import requests as r

# Step 1: Get user input
print("Lyrics Finder")
artist_name = input("Artist name: ")
song_title = input("Song title: ")

# Step 2: Display message
print(f"Searching......")
print(f"Now searching for '{song_title}' by {artist_name}")

# Step 3: Call the Lyrics API
url = f"https://api.lyrics.ovh/v1/{artist_name}/{song_title}"
response = r.get(url)

# Step 4: Check if the response is successful and display the lyrics
if response.status_code == 200:
    data = response.json()  # Parse JSON data
    lyrics = data.get('lyrics')  # Get the lyrics
    if lyrics:
        print("\\nLyrics found:\\n")
        print(lyrics)
    else:
        print("Lyrics not available for this song.")
else:
    print("Error: Lyrics not found. Check the song and artist name.")`;

  const gitCommands = `git add README.md
git commit -m "Added README for Lyrics Finder script"
git push origin main`;

  return (
    <div className={`min-h-screen ${darkMode ? ' text-gray-300' : 'bg-white text-gray-700'}`}>
         <Fade direction="down"  duration={1600} triggerOnce>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-20">
         <div className=" mt-10 md:mt-20  lg:mt-20">
                <div className={`flex flex-row p-2 cursor-pointer rounded-full max-w-20 ${darkMode ? 'text-black bg-white hover:bg-gray-400' : 'bg-black text-white hover:bg-gray-700'} items-center mb-10`} onClick={() => { navigate('/blog'); }}>
                    <Undo2 size={14} />
                    <p className="text-sm ml-2">Back</p>
                </div>
       {/* Description */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Description</h2>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            The Lyrics Finder is a simple Python script that allows users to find song lyrics by entering 
            the artist's name and song title. It uses the Lyrics.ovh API to fetch and display the lyrics 
            directly in the terminal.
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Features</h2>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>• Search for lyrics by artist name and song title</li>
            <li>• Display lyrics directly in the terminal</li>
            <li>• Handle errors if lyrics are not found</li>
            <li>• Simple and intuitive command-line interface</li>
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Requirements</h2>
          <ul className={`space-y-1 font-mono text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>• Python 3.x</li>
            <li>• requests library (for making API requests)</li>
          </ul>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Installation</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Clone the Repository</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Get a copy of this project by cloning it:
              </p>
              <CodeBlock code={cloneCode} language="bash" darkMode={darkMode} />
            </div>

            <div>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. Set Up Virtual Environment</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Navigate into your project folder and create a virtual environment:
              </p>
              <CodeBlock code={setupCode} language="bash" darkMode={darkMode} />
              
              <p className={`text-sm mb-2 mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Activate the virtual environment:
              </p>
              
              <p className={`text-xs font-semibold mb-1 mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Windows:
              </p>
              <CodeBlock code={activateWindowsCode} language="bash" darkMode={darkMode} />
              
              <p className={`text-xs font-semibold mb-1 mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Mac/Linux:
              </p>
              <CodeBlock code={activateUnixCode} language="bash" darkMode={darkMode} />
            </div>

            <div>
              <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. Install Dependencies</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Install the required libraries using pip:
              </p>
              <CodeBlock code={installCode} language="bash" darkMode={darkMode} />
            </div>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Usage</h2>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Run the script:
          </p>
          <CodeBlock code={runCode} language="bash" darkMode={darkMode} />
          <ul className={`space-y-1 text-sm mt-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>• The script will prompt you to input the artist name and song title</li>
            <li>• The lyrics will be displayed in the terminal if found</li>
          </ul>
        </section>

        {/* Example */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Example</h2>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Here's what the script looks like when running:
          </p>
          <CodeBlock code={exampleOutputCode} language="bash" darkMode={darkMode} />
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>How It Works</h2>
          
          <div className="space-y-4 mb-4">
            <div>
              <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 1: User Input</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                The script prompts the user to enter the artist's name and song title.
              </p>
            </div>

            <div>
              <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 2: API Request</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Makes a GET request to the Lyrics.ovh API with the provided artist and song information.
              </p>
            </div>

            <div>
              <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 3: Response Handling</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Checks if the API returned a successful response (status code 200) and extracts the lyrics from the JSON data.
              </p>
            </div>

            <div>
              <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Step 4: Display Results</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Displays the lyrics in the terminal or shows an appropriate error message if lyrics are not found.
              </p>
            </div>
          </div>

          <h3 className={`text-base font-semibold mb-2 mt-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Complete Script</h3>
          <CodeBlock code={mainScriptCode} language="python" darkMode={darkMode} />
        </section>

        {/* API Information */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>API Information</h2>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            This script uses the Lyrics.ovh API to fetch song lyrics. The API endpoint format is:
          </p>
          <div className={`p-3 rounded-md font-mono text-xs ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
            https://api.lyrics.ovh/v1/[artist_name]/[song_title]
          </div>
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            No API key required • Free to use • Returns JSON response
          </p>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Troubleshooting</h2>
          <div className="space-y-3">
            <div>
              <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>ModuleNotFoundError: requests</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Make sure you've activated your virtual environment and installed requests using <code className="font-mono">pip install requests</code>
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Lyrics not found</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Check the spelling of the artist name and song title. Try different variations or check if the song exists in the API database.
              </p>
            </div>
            <div>
              <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Connection error</h3>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Ensure you have an active internet connection as the script requires API access.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Publishing to GitHub</h2>
          <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            To add your README and push it to GitHub:
          </p>
          <CodeBlock code={gitCommands} language="bash" darkMode={darkMode} />
          <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Note: Replace 'main' with your default branch name if different (e.g., 'master')
          </p>
        </section>

        {/* License */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>License</h2>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            This project is licensed under the MIT License.
          </p>
        </section>

        {/* Acknowledgements */}
        <section className="mb-12">
          <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Acknowledgements</h2>
          <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>• Lyrics provided by <a href="https://lyrics.ovh" className="underline hover:opacity-80">Lyrics.ovh API</a></li>
            <li>• Special thanks to all contributors and the open-source community</li>
          </ul>
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

export default Lyrics;