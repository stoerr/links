---
filename: cat-files-contents-script
category: Code
url: https://ib.bsb.br/cat-files
title: cat files contents [script] — infoBAG
description: A script that extracts text from files in a specified directory, concatenates them, and saves the result.

---

# cat files contents [script] — infoBAG

https://ib.bsb.br/cat-files

## Description

A script that extracts text from files in a specified directory, concatenates them, and saves the result.

## Summary

The script starts by defining directories and supported file types. It then processes individual files based on their types, converting them to text if needed. Unsupported file types are processed using the 'cat' command. The script checks for textual output and appends the results to the final concatenated file. Once all files are processed, temporary files are cleaned up, and the process is completed successfully.
