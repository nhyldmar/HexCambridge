function replace_bad_word(node, bad_word) {
    let value = node.nodeValue;
    value = value.replace(bad_word, "■".repeat(bad_word.length))
}