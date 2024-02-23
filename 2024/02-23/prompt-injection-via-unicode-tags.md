---

filename: prompt-injection-via-unicode-tags
category: Technology, Social Media
url: https://twitter.com/rez0__/status/1758556246850896185
title: Invisible Prompt Injection via Unicode Tags
description: a way of unnoticedly injecting prompts into OpenAI's API

---{important: include this line to separate front matter from the content, but remove this comment}

# Invisible Prompt Injection via Unicode Tags

https://twitter.com/rez0__/status/1758556246850896185

## Description

It's possible to inject prompts into OpenAI's API by using invisible unicode tags. This can be used to inject prompts into the API without the user noticing.

def convert_from_tag_chars(tagged_string):     return ''.join(chr(ord(ch) - 0xE0000) for ch in tagged_string if 0xE0061 <= ord(ch) <= 0xE007A)  tagged_input = input("Enter a string of tagged characters to convert to ASCII: ") ascii_output = convert_from_tag_chars(tagged_input) print("ASCII output:", ascii_output)
