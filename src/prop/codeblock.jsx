// components/CodeBlock.jsx
import React, { useState } from 'react';
import { ThemeContext } from '../content/themecontext';
import { useContext } from 'react';

const CodeBlock = ({ code, language = 'bash', darkMode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightSyntax = (line) => {
    if (language === "python") {
      let highlighted = line;

      // 1. Protect strings first (store them)
      const stringMatches = [];
      highlighted = highlighted.replace(/("[^"]*"|'[^']*')/g, (match) => {
        stringMatches.push(match);
        return `__STRING${stringMatches.length - 1}__`;
      });

      // 2. Keywords
      const keywords = [
        "def", "try", "except", "import", "from",
        "return", "print", "input", "subprocess",
        "time", "signal"
      ];

      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, "g");
        highlighted = highlighted.replace(
          regex,
          `<span style="color: ${darkMode ? 'rgb(192, 132, 252)' : 'rgb(147, 51, 234)'}">${keyword}</span>`
        );
      });

      // 3. Numbers
      highlighted = highlighted.replace(
        /\b(\d+)\b/g,
        `<span style="color: ${darkMode ? 'rgb(250, 204, 21)' : 'rgb(202, 138, 4)'}">$1</span>`
      );

      // 4. Restore strings
      highlighted = highlighted.replace(/__STRING(\d+)__/g, (match, index) => {
        const value = stringMatches[index];
        // Escape HTML entities in the string value
        const escapedValue = value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<span style="color: ${darkMode ? 'rgb(134, 239, 172)' : 'rgb(22, 163, 74)'}">${escapedValue}</span>`;
      });

      return highlighted;
    }

    return line;
  };

  const lines = code.split('\n');

  return (
    <div className={`relative my-4 border rounded-lg ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
      {/* Header with language and copy button */}
      <div className={`flex justify-between items-center px-4 py-2 border-b ${darkMode ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-100'}`}>
        <span className={`text-xs font-mono font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {language.toUpperCase()}
        </span>
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors ${
            darkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max">
          {/* Line numbers */}
          <div className={`py-3 text-right select-none ${darkMode ? 'bg-gray-950 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
            {lines.map((_, index) => (
              <div key={index} className="px-3 text-xs font-mono">
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code */}
          <pre className={`flex-1 py-3 px-4 overflow-x-auto font-mono text-xs ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {lines.map((line, index) => (
              <div key={index} className="whitespace-pre">
                <span dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || '&nbsp;' }} />
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;