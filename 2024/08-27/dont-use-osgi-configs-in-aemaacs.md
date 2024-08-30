---
filename: dont-use-osgi-configs-in-aemaacs
category: AEM, OSGi, Cloud Computing
url: https://medium.com/@achimkoch/dont-use-osgi-configs-in-aemaacs-18ed91053dee
title: Don’t use OSGi configs in AEMaaCS
description: An analysis of why using OSGi configurations in AEM as a Cloud Service may be unnecessary and potentially counterproductive.
---
# Don’t use OSGi configs in AEMaaCS

[https://medium.com/@achimkoch/dont-use-osgi-configs-in-aemaacs-18ed91053dee](https://medium.com/@achimkoch/dont-use-osgi-configs-in-aemaacs-18ed91053dee)

## Description

An analysis of why using OSGi configurations in AEM as a Cloud Service may be unnecessary and potentially counterproductive.

## Summary

The article explores the separation of code and configuration in AEM and critiques the necessity of OSGi configurations for custom deployments in AEM as a Cloud Service. The author argues that the unique environment of a single deployment reduces the need for extensive configuration, as developers can leverage environment variables without the burdensome overhead of OSGi settings.

Key points include the realization that many configurations that involve simple variations can be handled without OSGi, leading to cleaner and more coherent code. Additionally, the text emphasizes that changes in OSGi configurations still require deployments, which can be implemented more efficiently with static variables in the code. The conclusion encourages embracing simplicity and clean coding practices, discouraging unnecessary complexity in software development.
