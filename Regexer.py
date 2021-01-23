import json

def convert_to_regex(word):
    regex_out = "/\\w*" # This might be too many '\'s but it makes the Python IDE happy.

    for index, character in enumerate(word):
        # This will behave poorly if KKK (say) is in the list.
        # Skip if character is same as previous
        if index != 0:
            if character == word[index - 1]:
                continue

        # Append any variation of at least one of the character to the regex
        if character == 'f':
            regex_out += "(?:f+|p+h+)"
        elif character == 'c' or character == 'k':
            regex_out += "[ck]+"
        else:
            regex_out += character + "+"
        

    return regex_out + "e*s*/i" # Plurals & case insensitive. Might need to be /gi


# read file
with open('badWords.json', 'r') as myfile:
    data=myfile.read()

# parse file
words = json.loads(data)

for word in words["words"]:
    print(convert_to_regex(word))

# show values
# print("words: " + str(words['words'][0]))

