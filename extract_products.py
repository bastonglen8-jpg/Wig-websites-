import re

with open('/tmp/actual_embed.html', 'r') as f:
    text = f.read()

# Let's find const rs=[
start_idx = text.find('const rs=[')
if start_idx != -1:
    bracket_count = 0
    in_string = False
    string_char = ''
    i = start_idx + len('const rs=')
    array_content = ''
    while i < len(text):
        char = text[i]
        if char in ["'", '"', '`'] and (i == 0 or text[i-1] != '\\'):
            if not in_string:
                in_string = True
                string_char = char
            elif string_char == char:
                in_string = False
        if not in_string:
            if char == '[':
                bracket_count += 1
            elif char == ']':
                bracket_count -= 1
                if bracket_count == 0:
                    array_content = text[start_idx + len('const rs='):i+1]
                    break
        i += 1
    
    print('=== PRODUCTS ARRAY LENGTH ===')
    print(len(array_content))
    with open('/tmp/extracted_products.js', 'w') as outf:
        outf.write(array_content)
else:
    print('Not found')
