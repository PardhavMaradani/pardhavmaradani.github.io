---
title: GSoC 2025 - Final Report
date: 2025-08-31 00:00:00 +0530
categories: ["GSoC 2025"]
tags: [gsoc, blender, python]
image:
  path: assets/img/GSoC-Vertical.png
---

This is the final report of my GSoC 2025 project [Better interfacing of Blender and MDAnalysis](https://summerofcode.withgoogle.com/programs/2025/projects/9BR8jbvV) with [MDAnalysis](https://www.mdanalysis.org) [organization](https://summerofcode.withgoogle.com/programs/2025/organizations/mdanalysis) under the mentorship of [Yuxuan Zhuang](https://github.com/yuxuanzhuang) and [Brady Johnston](https://github.com/bradyajohnston).

This project aimed to define, prototype and implement various APIs along with an integrated GUI in Blender that together provide advanced visualization capabilities for MDAnalysis as outlined in my [proposal](https://docs.google.com/document/d/1f_1Zoj6eQPIKW2ooXLdC0HHWnTkb-WRlMMzp9bCibFc/edit?usp=sharing).

My contributions were to [Molecular Nodes](https://github.com/BradyAJohnston/MolecularNodes), a popular Blender extension that allows importing MDAnalysis universes and provides advanced rendering capabilities through a GUI. This project improved the scripting capabilities of Molecular Nodes through new API for existing and new features and also added a new GUI to improve the interactive visualization experience.

## Code

All the code for this project can be found in the `gsoc-2025` branch of the Molecular Nodes repo as [PR #875](https://github.com/BradyAJohnston/MolecularNodes/pull/875) that merges these onto `main`. The appendix lists individual PRs, design discussions and weekly progress reports that were part of this project.

## Contributions

Here is a summary of my contributions:

### Multiple styles / representations for Trajectories

Molecular Nodes already had support for multiple styles for the `Molecule` entity prior to this project. This project extended this support to the `Trajectory` entity as well. With this, a single MDAnalysis universe loaded into Blender can have multiple styles / representations based either on MDAnalysis selection phrases or `AtomGroup`s. All style specific configurations can be made through the API as well as the new Viewport GUI.

### Annotations

Annotations support is newly added to Molecular Nodes as part of this project. Annotations allow drawing text, arrows, lines and other shapes as overlays over the 3D models to show info or analysis results that are dynamic, can be interactively viewed and rendered. The annotations support is built to be easily extensible by end users to write their own annotation types based on their analysis needs by only using high level utilities. A common API interface along with automatic GUI support is provided by the implementation. A few annotations for displaying atom info, center-of-masses, distance between center-of-masses, canonical dihedral angles and universe info are bundled for Trajectories, grid axes and grid info for Density grids. A few others to add generic 2d and 3d labels in scenes are provided for all entities.

### Revamped Density Entity

Molecular Nodes had support for density grids in the MRC2014 format prior to this project (with `mrcfile`). This project revamped this support to use MDAnalysis [GridDataFormats](https://github.com/MDAnalysis/GridDataFormats) to support a wider variety of density grids. A new `Density ISO Surface Style` Geometry Node was added (programatically) to support both positive and negative ISO values, contours and slicing along the three major axes. This now allows visualizing MDAnalysis `DensityAnalysis` results written to `.dx` files like the [Calculating the solvent density around a protein](https://userguide.mdanalysis.org/stable/examples/analysis/volumetric/density_analysis.html) example.

### Viewport GUI

A new GUI was added to the 3D Viewport region of Blender as part of this project. This GUI is accessible from the side panel (or the `n-panel`) of the 3D Viewport and displays all the Molecular Node entities, entity specific configurations like trajectory details, styles and annotations. The panels in this GUI allow for easy customization (with instant visualizations) of all the values that are configurable through the API as well. All the elements of this GUI are animatable as well in Blender.

### Canvas features - Rendering / Animation

The `Canvas` support in Molecular Nodes was at its early stages prior to this project. Animation support was added by rendering individual frames and putting them together using Blender's Video Sequence Editor APIs. An automatic compositor setup was added to allow rendered annotation images to be composited over the final renders. A generic framework was added that allows temporarily overriding Blender render settings for generating images and movies and restoring them back. A new `Camera` class and a `frame_view` method allows for framing any region of interest from different view points for renders.

## Acknowledgements

I would like to thank my mentors [Yuxuan Zhuang](https://github.com/yuxuanzhuang) and [Brady Johnston](https://github.com/bradyajohnston) who interacted with me prior to the project as well, provided valuable feedback, insights and guided me throughout this project. A special thanks to [Tyler Reddy](https://github.com/tylerjereddy) for feedback and support in discussions prior to the project. I would also like to thank everyone at [MDAnalysis](https://www.mdanalysis.org) for being so warm, welcoming and providing me this opportunity as I start my open source journey. Finally, a big thanks to Google and the GSoC team for this wonderful program that definitely helped me learn and grow.

## Appendix

### PRs

Overall pull request: [PR #875](https://github.com/BradyAJohnston/MolecularNodes/pull/875)

Individual PRs:

| PR # | Description |
|------|-------------|
| [#882](https://github.com/BradyAJohnston/MolecularNodes/pull/882) | Add basic trajectory API |
| [#887](https://github.com/BradyAJohnston/MolecularNodes/pull/887) | Add UI for entities in 3D Viewport |
| [#888](https://github.com/BradyAJohnston/MolecularNodes/pull/888) | Add style branches support for Trajectories |
| [#891](https://github.com/BradyAJohnston/MolecularNodes/pull/891) | Add base framework for annotations |
| [#900](https://github.com/BradyAJohnston/MolecularNodes/pull/900) | Add custom validation support for annotations |
| [#901](https://github.com/BradyAJohnston/MolecularNodes/pull/901) | Annotations draw handler base |
| [#903](https://github.com/BradyAJohnston/MolecularNodes/pull/903) | Add basic line drawing support for annotations |
| [#905](https://github.com/BradyAJohnston/MolecularNodes/pull/905) | Add support for AtomGroup selections through API interface |
| [#906](https://github.com/BradyAJohnston/MolecularNodes/pull/906) | Add depth support for annotation text |
| [#907](https://github.com/BradyAJohnston/MolecularNodes/pull/907) | Add canonical dihedrals trajectory annotation |
| [#909](https://github.com/BradyAJohnston/MolecularNodes/pull/909) | Rendering support for annotations |
| [#910](https://github.com/BradyAJohnston/MolecularNodes/pull/910) | Trajectory Universe Info, generic 2D and 3D label annotations |
| [#913](https://github.com/BradyAJohnston/MolecularNodes/pull/913) | Use property indexing instead of reference to avoid crashes |
| [#916](https://github.com/BradyAJohnston/MolecularNodes/pull/916) | Density entity - style interface, gui, annotations |
| [#917](https://github.com/BradyAJohnston/MolecularNodes/pull/917) | Use MDAnalysis GridDataFormats for density grids |
| [#918](https://github.com/BradyAJohnston/MolecularNodes/pull/918) | Density Annotations and additions |
| [#920](https://github.com/BradyAJohnston/MolecularNodes/pull/920) | Density ISO Surface Style |
| [#926](https://github.com/BradyAJohnston/MolecularNodes/pull/926) | Automatic compositor setup to handle annotations overlay in renders |
| [#929](https://github.com/BradyAJohnston/MolecularNodes/pull/929) | Add support to override common annotation params |
| [#932](https://github.com/BradyAJohnston/MolecularNodes/pull/932) | Add rendering animation support to Canvas |
| [#937](https://github.com/BradyAJohnston/MolecularNodes/pull/937) | Fix entity type discrepancies |
| [#938](https://github.com/BradyAJohnston/MolecularNodes/pull/938) | Add frame view support to Canvas |
| [#940](https://github.com/BradyAJohnston/MolecularNodes/pull/940) | Add MDAnalysisTests dependency to tests and docs |
| [#941](https://github.com/BradyAJohnston/MolecularNodes/pull/941) | Add density examples to docs |
| [#942](https://github.com/BradyAJohnston/MolecularNodes/pull/942) | Add Canvas examples doc |
| [#943](https://github.com/BradyAJohnston/MolecularNodes/pull/943) | Add tutorials and API examples to docs |

### Discussions

| # | Description |
|---|-------------|
| [#870](https://github.com/BradyAJohnston/MolecularNodes/discussions/870) | GSoC 2025: High level structure to start with |
| [#879](https://github.com/BradyAJohnston/MolecularNodes/discussions/879) | GSoC 2025: Styles support for MDA Universes |
| [#889](https://github.com/BradyAJohnston/MolecularNodes/discussions/889) | GSoC 2025: Annotations support for entities |
| [#914](https://github.com/BradyAJohnston/MolecularNodes/discussions/914) | GSoC 2025: DX file support for density visualizations |
| [#924](https://github.com/BradyAJohnston/MolecularNodes/discussions/924) | UI in 3D viewport n-panel vs Object Properties |
| [#925](https://github.com/BradyAJohnston/MolecularNodes/discussions/925) | GSoC 2025: Compositor setup for Renders |
| [#928](https://github.com/BradyAJohnston/MolecularNodes/discussions/928) | GSoC 2025: Wrapping up |

### Weekly Progress

| Week | Description |
|------|-------------|
| [Week 1](https://pardhavmaradani.github.io/posts/gsoc-2025-week-1/) | Basic universe management APIs and GUI - Initial approach |
| [Week 2](https://pardhavmaradani.github.io/posts/gsoc-2025-week-2/) | Discussions on styles support for Trajectories |
| [Week 3](https://pardhavmaradani.github.io/posts/gsoc-2025-week-3/) | Trajectory API, GUI and Styles support |
| [Week 4](https://pardhavmaradani.github.io/posts/gsoc-2025-week-4/) | Design of Annotations |
| [Week 5](https://pardhavmaradani.github.io/posts/gsoc-2025-week-5/) | Base framework for Annotations |
| [Week 6](https://pardhavmaradani.github.io/posts/gsoc-2025-week-6/) | Annotations implementation - I |
| [Week 7](https://pardhavmaradani.github.io/posts/gsoc-2025-week-7/) | Annotations implementation - II |
| [Week 8](https://pardhavmaradani.github.io/posts/gsoc-2025-week-8/) | Rendering support for Annotations |
| [Week 9](https://pardhavmaradani.github.io/posts/gsoc-2025-week-9/) | Refactored Density Entity |
| [Week 10](https://pardhavmaradani.github.io/posts/gsoc-2025-week-10/) | Density Annotations and new ISO Surface style |
| [Week 11](https://pardhavmaradani.github.io/posts/gsoc-2025-week-11/) | Auto Compositor setup |
| [Week 12](https://pardhavmaradani.github.io/posts/gsoc-2025-week-12/) | Canavs updates |
