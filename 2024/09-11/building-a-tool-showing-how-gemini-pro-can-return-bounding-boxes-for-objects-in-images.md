---
filename: building-a-tool-showing-how-gemini-pro-can-return-bounding-boxes-for-objects-in-images
category: Tool, AI, Image Processing
url: https://simonwillison.net/2024/Aug/26/gemini-bounding-box-visualization/
title: Building a tool showing how Gemini Pro can return bounding boxes for objects in images
description: This article discusses creating a tool that utilizes Google’s Gemini API to return bounding boxes for objects in images.
---
# Building a tool showing how Gemini Pro can return bounding boxes for objects in images

[https://simonwillison.net/2024/Aug/26/gemini-bounding-box-visualization/](https://simonwillison.net/2024/Aug/26/gemini-bounding-box-visualization/)

## Description

This article discusses creating a tool that utilizes Google’s Gemini API to return bounding boxes for objects in images.

## Summary

In this article, Simon Willison shares his exploration of Google’s Gemini API, specifically its capability to return bounding boxes for object detection within images. While researching various multi-modal LLM APIs, he discovered that Gemini can output relative coordinates for bounding boxes, which are then scaled from a 1000x1000 reference frame back to original image dimensions. He experimented with the API using Python, yielding promising results in terms of actual bounding box data.

Willison then describes the process of building a tool that allows users to upload images, input bounding box coordinates, and visualize those boxes directly in the browser. He highlights challenges faced, including handling image orientation metadata from JPEGs, which affected the accuracy of bounding box placements. By leveraging multiple AI models, he was able to successfully combine functionalities into a single, interactive tool that demonstrates the Gemini API's capabilities effectively.
