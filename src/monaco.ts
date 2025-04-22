import { Monaco } from '@monaco-editor/react'
import themeColors from '@assets/theme.json'
import languageColors from '@assets/language.json'

export const themeName = 'custom-language'
export const languageName = 'custom-language'

export function edit(monaco: Monaco) {
    monaco.editor.defineTheme(themeName, {
        base: 'vs-dark',
        inherit: false,
        colors: themeColors,
        rules: languageColors
    })

    registerLanguage(monaco)
}

function registerLanguage(monaco: Monaco) {
    monaco.languages.register({ id: languageName })
    monaco.languages.setMonarchTokensProvider(languageName, {
        tokenizer: {
            root: [
                // [/\b(?:var|let|const|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|import|export|class|extends|super|new|this|instanceof|typeof|void|debugger|await|async|yield)\b/, 'keyword'],
    
                // [/[a-zA-Z_$][\w$]*/, 'identifier'],

                // [/\b\d+(\.\d+)?([eE][+-]?\d+)?\b/, 'number'],

                [/(["'`])(?:\\.|[^\x01])*?\1/, 'string'],

                // [/[+\-*/%&|^!<>?~:]=?/, 'operator'],

                // [/[{}()\[\]]/, '@brackets'],

                // [/(\/\/.*$)/, 'comment'],
                // [/\/\*[\s\S]*?\*\//, 'comment'],

                // [/[.,;@]/, 'punctuation'],
            ]
        }
    })

    monaco.languages.setLanguageConfiguration(languageName, {
        wordPattern: /\w+/,
      
        comments: {
          lineComment: '//',
          blockComment: ['/*', '*/']
        },
      
        brackets: [
          ['{', '}'],
          ['[', ']'],
          ['(', ')']
        ],
      
        autoClosingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '"', close: '"' },
          { open: "'", close: "'" },
          { open: '`', close: '`' }
        ],
      
        surroundingPairs: [
          { open: '{', close: '}' },
          { open: '[', close: ']' },
          { open: '(', close: ')' },
          { open: '"', close: '"' },
          { open: "'", close: "'" },
          { open: '`', close: '`' }
        ],
      
        indentationRules: {
          increaseIndentPattern: /^(.*\{[^}"\r\n]*|\b(?:if|else|for|while|switch|case|try|catch|finally)\b.*)$/m,
          decreaseIndentPattern: /^\s*(\}|\/\/.*|\*\/)/,
        }
    });
}