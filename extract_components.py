import re

with open('/tmp/actual_embed.html', 'r') as f:
    text = f.read()

components = ['pm', 'bm', 'jm', 'Nm', 'wm', 'hm', 'gm', 'C1', 'D1', 'mm', 'E1']

for comp in components:
    # Let's search for 'function pm'
    target_fn = f'function {comp}'
    idx = text.find(target_fn)
    if idx == -1:
        # Try 'const pm='
        target_fn = f'const {comp}='
        idx = text.find(target_fn)
    
    if idx != -1:
        # Find the first '{' that occurs after the parameter list.
        # To be safe, we find 'function comp' and then search for the closing parenthesis of the parameters,
        # then find the '{' after it.
        # Let's find ')' of parameter list. We can scan from idx until we pass the parameters.
        # In JS, parameters could be like ({onNavigate:v}) or (v).
        # Let's find the '(' after idx
        start_paren = text.find('(', idx)
        if start_paren != -1:
            # Match parentheses to find closing ')'
            paren_count = 1
            j = start_paren + 1
            in_string = False
            string_char = ''
            while j < len(text) and paren_count > 0:
                char = text[j]
                if char in ["'", '"', '`'] and (j == 0 or text[j-1] != '\\'):
                    if not in_string:
                        in_string = True
                        string_char = char
                    elif string_char == char:
                        in_string = False
                if not in_string:
                    if char == '(':
                        paren_count += 1
                    elif char == ')':
                        paren_count -= 1
                j += 1
            
            # Now find the first '{' after j
            first_bracket = text.find('{', j)
            if first_bracket != -1:
                bracket_count = 1
                i = first_bracket + 1
                in_string = False
                string_char = ''
                while i < len(text):
                    char = text[i]
                    if char in ["'", '"', '`'] and (i == 0 or text[i-1] != '\\'):
                        if not in_string:
                            in_string = True
                            string_char = char
                        elif string_char == char:
                            in_string = False
                    if not in_string:
                        if char == '{':
                            bracket_count += 1
                        elif char == '}':
                            bracket_count -= 1
                            if bracket_count == 0:
                                comp_content = text[idx:i+1]
                                break
                    i += 1
                print(f'Extracted {comp}, length: {len(comp_content)}')
                with open(f'/tmp/extracted_{comp}.js', 'w') as outf:
                    outf.write(comp_content)
            else:
                print(f'{comp} - first bracket not found')
        else:
            # Try finding first '{' directly if no '(' (e.g. arrow function without paren, though rare)
            first_bracket = text.find('{', idx)
            if first_bracket != -1:
                # ...
                pass
    else:
        print(f'{comp} not found')
