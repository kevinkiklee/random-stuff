class Node {
  constructor(value = null, count = 0, isComplete = false) {
    this.value = value
    this.children = []
    this.isComplete = isComplete
    this.count = count
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word, count) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i += 1) {
      const currentChar = word[i]
      const [currentEntry] = currentNode.children.filter(child => child.value === currentChar)
      if (currentEntry) {
        currentNode = currentEntry
      } else {
        const newNode = new Node(currentChar, count, i === word.length - 1)
        currentNode.children.push(newNode)
        currentNode = newNode
      }
    }

    return this
  }

  getAllWords(word) {
    let currentNode = this.root
    let currentChildren = currentNode.children
    const prefixes = []

    for (let i = 0; i < word.length; i += 1) {
      const currentChar = word[i]
      const matches = currentChildren.filter(child => child.value === currentChar)
      currentChildren = matches
    }

    debugger
  }
}

class AutoCompleteSystem {
  constructor(sentences, count) {
    this.store = new Trie()
    this.inputStore = ''
    sentences.forEach((sentence, i) => this.store.insert(sentence, count[i]))
    return this
  }

  input(char) {
    this.inputStore += char
    return this.store.getAllWords(this.inputStore)
  }
}

const system = new AutoCompleteSystem(["i love you","island","iroman","i love leetcode"],[5,3,2,2])

const result1 = system.input('i')
const result2 = system.input(' ')
const result3 = system.input('l')

