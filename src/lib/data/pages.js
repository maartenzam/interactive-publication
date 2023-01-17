const pages = [
    {
        "id": 1,
        "slug": "graphic-design-introduction",
        "title": "Graphic design: introduction",
        "m1": "Graphic design",
        "t1": "Design principles",
        "metatags": "Introduction"
    },
    {
        "id": 2,
        "slug": "the-grid",
        "title": "The grid",
        "m1": "Graphic design",
        "t1": "Design principles",
        "metatags": "Grid",
        "links": "breaking-the-grid"
    },
    {
        "id": 3,
        "slug": "arrangement-and-reading-direction",
        "title": "Arrangement and reading direction",
        "m1": "Graphic design",
        "t1": "Design principles",
        "m2": "Visual Hierarchy",
        "t2": "Design principles",
        "metatags": "Arrangement"
    },
    {
        "id": 4,
        "slug": "chart-anatomy",
        "title": "Chart anatomy",
        "m1": "Graphic design",
        "t1": "Design principles",
        "m2": "Chart elements",
        "t2": "Design principles",
        "metatags": "Chart anatomy"
    },
    {
        "id": 5,
        "slug": "breaking-the-grid",
        "title": "Breaking the grid",
        "m1": "Graphic design",
        "t1": "Design principles",
        "metatags": "Grid",
        "links": "grid"
    },
    {
        "id": 6,
        "slug": "application-of-graphic-design-in-data-visualisation",
        "title": "Application of graphic design in data visualisation",
        "m1": "Graphic design",
        "t1": "Design principles",
        "metatags": "Guidelines"
    },
    {
        "id": 7,
        "slug": "visual-hierarchy-introduction",
        "title": "Visual hierarchy: introduction",
        "m1": "Visual hierarchy",
        "t1": "Design principles",
        "metatags": "Introduction"
    },
    {
        "id": 8,
        "slug": "visual-hierarchy-x-y-positioning",
        "title": "Visual hierarchy: x & y positioning",
        "m1": "Visual hierarchy",
        "t1": "Design principles",
        "metatags": "Arrangement"
    },
    {
        "id": 9,
        "slug": "visual-hierarchy-z-positioning",
        "title": "Visual hierarchy: z positioning",
        "m1": "Visual hierarchy",
        "t1": "Design principles",
        "metatags": "Arrangement, Chart layers"
    },
    {
        "id": 10,
        "slug": "visual-hierarchy-sizing",
        "title": "Visual hierarchy: sizing",
        "m1": "Visual hierarchy",
        "t1": "Design principles",
        "m2": "Chart elements",
        "t2": "Design principles"
    },
    {
        "id": 11,
        "slug": "visual-hierarchy-colour",
        "title": "Visual hierarchy: colour",
        "m1": "Visual hierarchy",
        "t1": "Design principles",
        "m2": "Colour",
        "t2": "Design principles",
        "metatags": "Colour"
    },
    {
        "id": 12,
        "slug": "visual-hierarchy-enclosure",
        "title": "Visual hierarchy: enclosure",
        "m1": "Visual hierarchy",
        "t1": "Design principles"
    },
    {
        "id": 13,
        "slug": "chart-canvas",
        "title": "Chart canvas",
        "m1": "Chart elements",
        "t1": "Design principles"
    },
    {
        "id": 14,
        "slug": "axes-grids-and-legends",
        "title": "Axes, grids and legends",
        "m1": "Chart elements",
        "t1": "Design principles",
        "metatags": "Axes, Grids, Legends",
        "links": "number-formatting, date-formatting"
    },
    {
        "id": 15,
        "slug": "chart-junk-and-data-ink-origins",
        "title": "Chart junk and data ink: origins",
        "m1": "Chart junk",
        "t1": "Design principles"
    },
    {
        "id": 16,
        "slug": "chart-junk-and-data-ink-minimalistic-vs-rich-design",
        "title": "Chart junk and data ink: minimalistic vs rich design",
        "m1": "Chart junk",
        "t1": "Design principles"
    },
    {
        "id": 17,
        "slug": "chart-junk-and-data-ink-counter-movement",
        "title": "Chart junk and data ink: counter movement",
        "m1": "Chart junk",
        "t1": "Design principles"
    },
    {
        "id": 18,
        "slug": "bitmap-images",
        "title": "Bitmap images",
        "m1": "Graphic file formats",
        "t1": "Design principles"
    },
    {
        "id": 19,
        "slug": "vector-images",
        "title": "Vector images",
        "m1": "Graphic file formats",
        "t1": "Design principles"
    },
    {
        "id": 20,
        "slug": "bitmap-versus-vector-images",
        "title": "Bitmap versus vector images",
        "m1": "Graphic file formats",
        "t1": "Design principles"
    },
    {
        "id": 21,
        "slug": "graphic-file-formats-units",
        "title": "Graphic file formats: units",
        "m1": "Graphic file formats",
        "t1": "Design principles"
    },
    {
        "id": 22,
        "slug": "file-formats-guidelines",
        "title": "File formats: guidelines",
        "m1": "Graphic file formats",
        "t1": "Design principles",
        "metatags": "Guidelines"
    },
    {
        "id": 23,
        "slug": "natural-aspect-ratios",
        "title": "Natural aspect ratios",
        "m1": "Size and aspect ratio",
        "t1": "Design principles"
    },
    {
        "id": 24,
        "slug": "line-chart-aspect-ratios",
        "title": "Line chart aspect ratios",
        "m1": "Size and aspect ratio",
        "t1": "Design principles"
    },
    {
        "id": 25,
        "slug": "scaling-charts",
        "title": "Scaling charts",
        "m1": "Size and aspect ratio",
        "t1": "Design principles",
        "m2": "Responsive visualisations",
        "t2": "Accessibility"
    },
    {
        "id": 26,
        "slug": "what-is-colour",
        "title": "What is colour?",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Introduction"
    },
    {
        "id": 27,
        "slug": "describing-colours-rgb",
        "title": "Describing colours: RGB",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Describing colours"
    },
    {
        "id": 28,
        "slug": "describing-colours-hsl",
        "title": "Describing colours: HSL",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Describing colours"
    },
    {
        "id": 29,
        "slug": "describing-colours-cmyk",
        "title": "Describing colours: CMYK",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Describing colours"
    },
    {
        "id": 30,
        "slug": "relationship-between-rgb-hsl-and-cmyk",
        "title": "Relationship between RGB, HSL and CMYK",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Describing colours"
    },
    {
        "id": 31,
        "slug": "colour-harmonies",
        "title": "Colour harmonies",
        "m1": "Colour",
        "t1": "Design principles"
    },
    {
        "id": 32,
        "slug": "contrast",
        "title": "Contrast",
        "m1": "Colour",
        "t1": "Design principles",
        "m2": "Colour blindness",
        "t2": "Accessibility"
    },
    {
        "id": 33,
        "slug": "figureground",
        "title": "Figure-ground",
        "m1": "Colour",
        "t1": "Design principles"
    },
    {
        "id": 34,
        "slug": "colour-connotations",
        "title": "Colour connotations",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Connotations"
    },
    {
        "id": 35,
        "slug": "colour-for-categories",
        "title": "Colour for categories",
        "m1": "Colour",
        "t1": "Design principles",
        "m2": "Colour blindness",
        "t2": "Accessibility",
        "metatags": "Colour in dataviz"
    },
    {
        "id": 36,
        "slug": "colour-for-numerical-data",
        "title": "Colour for numerical data",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Colour in dataviz"
    },
    {
        "id": 37,
        "slug": "endrainbow",
        "title": "EndRainbow",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Colour in dataviz"
    },
    {
        "id": 38,
        "slug": "perceptual-uniformity",
        "title": "Perceptual uniformity",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Colour in dataviz"
    },
    {
        "id": 39,
        "slug": "colour-scales",
        "title": "Colour scales",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Colour in dataviz, Scales"
    },
    {
        "id": 40,
        "slug": "colour-guidelines",
        "title": "Colour: guidelines",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Guidelines"
    },
    {
        "id": 41,
        "slug": "colour-tools",
        "title": "Colour: Tools",
        "m1": "Colour",
        "t1": "Design principles",
        "metatags": "Tools"
    },
    {
        "id": 42,
        "slug": "number-rounding",
        "title": "Number rounding",
        "m1": "Numbers",
        "t1": "Design principles",
        "metatags": "Formatting"
    },
    {
        "id": 43,
        "slug": "number-formatting",
        "title": "Number formatting",
        "m1": "Numbers",
        "t1": "Design principles",
        "metatags": "Formatting",
        "links": "chart-guides"
    },
    {
        "id": 44,
        "slug": "date-formatting",
        "title": "Date formatting",
        "m1": "Dates",
        "t1": "Design principles",
        "metatags": "Formatting",
        "links": "chart-guides"
    },
    {
        "id": 45,
        "slug": "serif-vs-sans-serif",
        "title": "Serif vs Sans serif",
        "m1": "Typography",
        "t1": "Design principles",
        "metatags": "Text"
    },
    {
        "id": 46,
        "slug": "font-connotations",
        "title": "Font connotations",
        "m1": "Typography",
        "t1": "Design principles",
        "metatags": "Text, Connotations"
    },
    {
        "id": 47,
        "slug": "fonttypefaces",
        "title": "Font/typefaces",
        "m1": "Typography",
        "t1": "Design principles",
        "metatags": "Text"
    },
    {
        "id": 48,
        "slug": "condensed-fonts",
        "title": "Condensed fonts",
        "m1": "Typography",
        "t1": "Design principles",
        "metatags": "Text"
    },
    {
        "id": 49,
        "slug": "small-fonts",
        "title": "Small fonts",
        "m1": "Typography",
        "t1": "Design principles",
        "metatags": "Text"
    },
    {
        "id": 50,
        "slug": "fonts-for-numbers",
        "title": "Fonts for numbers",
        "m1": "Typography",
        "t1": "Design principles",
        "m2": "Numbers",
        "t2": "Design principles",
        "metatags": "Text"
    },
    {
        "id": 51,
        "slug": "other-design-variables",
        "title": "Other design variables",
        "m1": "Typography",
        "t1": "Design principles",
        "metatags": "Text"
    },
    {
        "id": 52,
        "slug": "typography-in-accessibility",
        "title": "Typography in accessibility",
        "m1": "Typography",
        "t1": "Design principles",
        "metatags": "Text"
    },
    {
        "id": 53,
        "slug": "colour-in-accessibility",
        "title": "Colour in accessibility",
        "m1": "Colour",
        "t1": "Design principles",
        "m2": "Colour",
        "t2": "Accessibility"
    },
    {
        "id": 54,
        "slug": "text-on-images",
        "title": "Text on images",
        "m1": "Graphic file formats",
        "t1": "Design principles",
        "m2": "File formats",
        "t2": "Dataviz in practice",
        "metatags": "Text"
    },
    {
        "id": 55,
        "slug": "testing-accessibility",
        "title": "Testing accessibility",
        "m1": "Testing",
        "t1": "Design principles",
        "metatags": "Tools"
    },
    {
        "id": 56,
        "slug": "scannability",
        "title": "Scannability",
        "m1": "Tables",
        "t1": "Design principles"
    },
    {
        "id": 57,
        "slug": "clutter",
        "title": "Clutter",
        "m1": "Tables",
        "t1": "Design principles"
    },
    {
        "id": 58,
        "slug": "integrating-visualisations",
        "title": "Integrating visualisations",
        "m1": "Tables",
        "t1": "Design principles"
    },
    {
        "id": 59,
        "slug": "interactive-tables",
        "title": "Interactive tables",
        "m1": "Tables",
        "t1": "Design principles",
        "metatags": "Interactivity"
    },
    {
        "id": 60,
        "slug": "storytelling-and-data-visualisation",
        "title": "Storytelling and data visualisation",
        "m1": "Storytelling",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 61,
        "slug": "can-a-chart-tell-a-story",
        "title": "Can a chart tell a story?",
        "m1": "Storytelling",
        "t1": "Data storytelling"
    },
    {
        "id": 62,
        "slug": "when-data-equals-people",
        "title": "When data equals people",
        "m1": "Storytelling",
        "t1": "Data storytelling",
        "links": "anthropographics"
    },
    {
        "id": 63,
        "slug": "when-data-relates-to-people",
        "title": "When data relates to people",
        "m1": "Storytelling",
        "t1": "Data storytelling"
    },
    {
        "id": 64,
        "slug": "when-data-needs-to-made-relatable-to-people",
        "title": "When data needs to made relatable to people",
        "m1": "Storytelling",
        "t1": "Data storytelling"
    },
    {
        "id": 65,
        "slug": "data-communication",
        "title": "Data communication",
        "m1": "Cognitive load",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 66,
        "slug": "cognitive-load-introduction",
        "title": "Cognitive load introduction",
        "m1": "Cognitive load",
        "t1": "Data storytelling"
    },
    {
        "id": 67,
        "slug": "intrinsic-load",
        "title": "Intrinsic load",
        "m1": "Cognitive load",
        "t1": "Data storytelling"
    },
    {
        "id": 68,
        "slug": "extraneous-load",
        "title": "Extraneous load",
        "m1": "Cognitive load",
        "t1": "Data storytelling"
    },
    {
        "id": 69,
        "slug": "germane-load",
        "title": "Germane load",
        "m1": "Cognitive load",
        "t1": "Data storytelling"
    },
    {
        "id": 70,
        "slug": "cognitive-load-and-data-storytelling",
        "title": "Cognitive load and data storytelling",
        "m1": "Cognitive load",
        "t1": "Data storytelling"
    },
    {
        "id": 71,
        "slug": "cognitive-load-concepts-for-storytelling",
        "title": "Cognitive load concepts for storytelling",
        "m1": "Cognitive load",
        "t1": "Data storytelling"
    },
    {
        "id": 72,
        "slug": "the-importance-of-chart-titles",
        "title": "The importance of chart titles",
        "m1": "Chart titles",
        "t1": "Data storytelling"
    },
    {
        "id": 73,
        "slug": "guidelines-for-visualisation-titles",
        "title": "Guidelines for visualisation titles",
        "m1": "Chart titles",
        "t1": "Data storytelling",
        "metatags": "Guidelines"
    },
    {
        "id": 74,
        "slug": "more-guidelines-for-visualisation-titles",
        "title": "More guidelines for visualisation titles",
        "m1": "Chart titles",
        "t1": "Data storytelling",
        "metatags": "Guidelines"
    },
    {
        "id": 75,
        "slug": "visual-annotations-introduction",
        "title": "Visual annotations introduction",
        "m1": "Visual annotations",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 76,
        "slug": "visual-annotations-highlights",
        "title": "Visual annotations: highlights",
        "m1": "Visual annotations",
        "t1": "Data storytelling",
        "metatags": "Highlighting"
    },
    {
        "id": 77,
        "slug": "visual-annotations-aggregation-and-distribution",
        "title": "Visual annotations: aggregation and distribution",
        "m1": "Visual annotations",
        "t1": "Data storytelling",
        "metatags": "Aggregation, Distribution"
    },
    {
        "id": 78,
        "slug": "visual-annotations-icons-and-images",
        "title": "Visual annotations: icons and images",
        "m1": "Visual annotations",
        "t1": "Data storytelling",
        "metatags": "Icons, Images"
    },
    {
        "id": 79,
        "slug": "text-annotations-introduction",
        "title": "Text annotations introduction",
        "m1": "Text annotations",
        "t1": "Data storytelling",
        "metatags": "Introduction, Text"
    },
    {
        "id": 80,
        "slug": "text-annotation-anatomy",
        "title": "Text annotation anatomy",
        "m1": "Text annotations",
        "t1": "Data storytelling",
        "metatags": "Anatomy, Text"
    },
    {
        "id": 81,
        "slug": "text-annotations-stories",
        "title": "Text annotations stories",
        "m1": "Text annotations",
        "t1": "Data storytelling",
        "metatags": "Text"
    },
    {
        "id": 82,
        "slug": "labels-and-axis-annotations",
        "title": "Labels and axis annotations",
        "m1": "Text annotations",
        "t1": "Data storytelling",
        "metatags": "Text, Axes"
    },
    {
        "id": 83,
        "slug": "responsive-annotations",
        "title": "Responsive annotations",
        "m1": "Text annotations",
        "t1": "Data storytelling",
        "m2": "Responsive visualisations",
        "t2": "Accessibility",
        "metatags": "Text"
    },
    {
        "id": 84,
        "slug": "choosing-a-chart-type-for-your-story",
        "title": "Choosing a chart type for your story",
        "m1": "Choosing charts",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 85,
        "slug": "data-types",
        "title": "Data types",
        "m1": "Choosing charts",
        "t1": "Data storytelling",
        "metatags": "Data types"
    },
    {
        "id": 86,
        "slug": "message",
        "title": "Message",
        "m1": "Choosing charts",
        "t1": "Data storytelling"
    },
    {
        "id": 87,
        "slug": "visual-vocabulary",
        "title": "Visual vocabulary",
        "m1": "Choosing charts",
        "t1": "Data storytelling",
        "metatags": "Tools"
    },
    {
        "id": 88,
        "slug": "data-size",
        "title": "Data size",
        "m1": "Choosing charts",
        "t1": "Data storytelling",
        "links": "data-dense-visualisations"
    },
    {
        "id": 89,
        "slug": "audience",
        "title": "Audience",
        "m1": "Choosing charts",
        "t1": "Data storytelling"
    },
    {
        "id": 90,
        "slug": "media",
        "title": "Media",
        "m1": "Choosing charts",
        "t1": "Data storytelling",
        "m2": "Responsive visualisations",
        "t2": "Accessibility"
    },
    {
        "id": 91,
        "slug": "how-to-introduce-less-common-chart-types",
        "title": "How to introduce less common chart types",
        "m1": "Less common chart types",
        "t1": "Data storytelling",
        "metatags": "Introduction",
        "links": "cognitive-load"
    },
    {
        "id": 92,
        "slug": "the-above-chart",
        "title": "The above chart",
        "m1": "Less common chart types",
        "t1": "Data storytelling"
    },
    {
        "id": 93,
        "slug": "scatter-plots",
        "title": "Scatter plots",
        "m1": "Less common chart types",
        "t1": "Data storytelling"
    },
    {
        "id": 94,
        "slug": "logarithmic-scales",
        "title": "Logarithmic scales",
        "m1": "Less common chart types",
        "t1": "Data storytelling"
    },
    {
        "id": 95,
        "slug": "more-uncommon-charts",
        "title": "More uncommon charts",
        "m1": "Less common chart types",
        "t1": "Data storytelling"
    },
    {
        "id": 96,
        "slug": "narrative-visualisation-genres-introduction",
        "title": "Narrative visualisation genres introduction",
        "m1": "Narrative visualisation genres",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 97,
        "slug": "magazine-style-narrative-visualisation",
        "title": "Magazine style narrative visualisation",
        "m1": "Narrative visualisation genres",
        "t1": "Data storytelling"
    },
    {
        "id": 98,
        "slug": "annotated-chart-narrative-visualisation",
        "title": "Annotated chart narrative visualisation",
        "m1": "Narrative visualisation genres, Text annotations",
        "t1": "Data storytelling"
    },
    {
        "id": 99,
        "slug": "partitioned-poster-narrative-visualisation",
        "title": "Partitioned poster narrative visualisation",
        "m1": "Narrative visualisation genres",
        "t1": "Data storytelling"
    },
    {
        "id": 100,
        "slug": "flow-chart-narrative-visualisation",
        "title": "Flow chart narrative visualisation",
        "m1": "Narrative visualisation genres",
        "t1": "Data storytelling"
    },
    {
        "id": 101,
        "slug": "comic-strip-narrative-visualisation",
        "title": "Comic strip narrative visualisation",
        "m1": "Narrative visualisation genres",
        "t1": "Data storytelling"
    },
    {
        "id": 102,
        "slug": "slide-show-narrative-visualisation",
        "title": "Slide show narrative visualisation",
        "m1": "Narrative visualisation genres",
        "t1": "Data storytelling"
    },
    {
        "id": 103,
        "slug": "film-video-and-animation",
        "title": "Film, video and animation",
        "m1": "Narrative visualisation genres",
        "t1": "Data storytelling",
        "metatags": "Multimedia"
    },
    {
        "id": 104,
        "slug": "interactive-story-structures-introduction",
        "title": "Interactive story structures introduction",
        "m1": "Interactive story structures",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 105,
        "slug": "martini-glass-structure",
        "title": "Martini glass structure",
        "m1": "Interactive story structures",
        "t1": "Data storytelling"
    },
    {
        "id": 106,
        "slug": "interactive-slide-show-structure",
        "title": "Interactive slide show structure",
        "m1": "Interactive story structures",
        "t1": "Data storytelling"
    },
    {
        "id": 107,
        "slug": "drilldown-story-structure",
        "title": "Drill-down story structure",
        "m1": "Interactive story structures",
        "t1": "Data storytelling"
    },
    {
        "id": 108,
        "slug": "data-story-patterns-introduction",
        "title": "Data story patterns introduction",
        "m1": "Data story patterns",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 109,
        "slug": "evolution-over-time",
        "title": "Evolution over time",
        "m1": "Data story patterns",
        "t1": "Data storytelling"
    },
    {
        "id": 110,
        "slug": "intersections",
        "title": "Intersections",
        "m1": "Data story patterns",
        "t1": "Data storytelling"
    },
    {
        "id": 111,
        "slug": "correlations",
        "title": "Correlations",
        "m1": "Data story patterns",
        "t1": "Data storytelling",
        "links": "showing-correlations, pitfalls"
    },
    {
        "id": 112,
        "slug": "outliers",
        "title": "Outliers",
        "m1": "Data story patterns",
        "t1": "Data storytelling"
    },
    {
        "id": 113,
        "slug": "components",
        "title": "Components",
        "m1": "Data story patterns",
        "t1": "Data storytelling",
        "links": "showing-hierarchies"
    },
    {
        "id": 114,
        "slug": "data-view-patterns-introduction",
        "title": "Data view patterns introduction",
        "m1": "Data view patterns",
        "t1": "Data storytelling",
        "metatags": "Introduction"
    },
    {
        "id": 115,
        "slug": "contrasting-views",
        "title": "Contrasting views",
        "m1": "Data view patterns",
        "t1": "Data storytelling"
    },
    {
        "id": 116,
        "slug": "zooming-in",
        "title": "Zooming in",
        "m1": "Data view patterns",
        "t1": "Data storytelling",
        "metatags": "Zoom"
    },
    {
        "id": 117,
        "slug": "zooming-out",
        "title": "Zooming out",
        "m1": "Data view patterns",
        "t1": "Data storytelling",
        "metatags": "Zoom"
    },
    {
        "id": 118,
        "slug": "context-switch",
        "title": "Context switch",
        "m1": "Data view patterns",
        "t1": "Data storytelling"
    },
    {
        "id": 119,
        "slug": "small-multiples",
        "title": "Small multiples",
        "m1": "Data view patterns",
        "t1": "Data storytelling",
        "metatags": "Small multiples",
        "links": "facetting"
    },
    {
        "id": 120,
        "slug": "break-conventions",
        "title": "Break conventions",
        "m1": "Data view patterns",
        "t1": "Data storytelling"
    },
    {
        "id": 121,
        "slug": "questions-and-answers",
        "title": "Questions and answers",
        "m1": "Narrative pattern",
        "t1": "Data storytelling"
    },
    {
        "id": 122,
        "slug": "repetition",
        "title": "Repetition",
        "m1": "Narrative pattern",
        "t1": "Data storytelling"
    },
    {
        "id": 123,
        "slug": "building-it-up",
        "title": "Building it up",
        "m1": "Narrative pattern",
        "t1": "Data storytelling",
        "m2": "Scrollytelling",
        "t2": "Data storytelling"
    },
    {
        "id": 124,
        "slug": "gradual-visual-reveal",
        "title": "Gradual visual reveal",
        "m1": "Narrative pattern",
        "t1": "Data storytelling",
        "m2": "Scrollytelling",
        "t2": "Data storytelling"
    },
    {
        "id": 125,
        "slug": "concretising",
        "title": "Concretising",
        "m1": "Engagement pattern",
        "t1": "Data storytelling",
        "links": "when-data-needs-to-be-made-relatable"
    },
    {
        "id": 126,
        "slug": "you-draw-it",
        "title": "You draw it",
        "m1": "Engagement pattern",
        "t1": "Data storytelling",
        "metatags": "Interactivity"
    },
    {
        "id": 127,
        "slug": "show-the-humans-behind-the-dots",
        "title": "Show the humans behind the dots",
        "m1": "Engagement pattern",
        "t1": "Data storytelling",
        "metatags": "Anthropographics"
    },
    {
        "id": 128,
        "slug": "the-inverted-pyramid",
        "title": "The inverted pyramid",
        "m1": "Journalistic techniques",
        "t1": "Data storytelling"
    },
    {
        "id": 129,
        "slug": "informationseeking-mantra",
        "title": "Information-seeking mantra",
        "m1": "Journalistic techniques",
        "t1": "Data storytelling"
    },
    {
        "id": 130,
        "slug": "anthropographics",
        "title": "Anthropographics",
        "m1": "Journalistic techniques",
        "t1": "Data storytelling",
        "metatags": "Anthropographics"
    },
    {
        "id": 131,
        "slug": "put-in-real-people",
        "title": "Put in real people",
        "m1": "Journalistic techniques",
        "t1": "Data storytelling"
    },
    {
        "id": 132,
        "slug": "putting-the-you-in-the-headline",
        "title": "Putting the \"you\" in the headline",
        "m1": "Journalistic techniques",
        "t1": "Data storytelling"
    },
    {
        "id": 133,
        "slug": "cliffhangers",
        "title": "Cliffhangers",
        "m1": "Journalistic techniques",
        "t1": "Data storytelling"
    },
    {
        "id": 134,
        "slug": "data-comics",
        "title": "Data comics",
        "m1": "Combining with other media",
        "t1": "Data storytelling"
    },
    {
        "id": 135,
        "slug": "drawings-and-illustrations",
        "title": "Drawings and illustrations",
        "m1": "Combining with other media",
        "t1": "Data storytelling",
        "metatags": "Icons, Images"
    },
    {
        "id": 136,
        "slug": "layout",
        "title": "Layout",
        "m1": "Combining with other media",
        "t1": "Data storytelling",
        "m2": "Grid",
        "t2": "Design principles",
        "metatags": "Arrangement"
    },
    {
        "id": 137,
        "slug": "photoviz",
        "title": "Photoviz",
        "m1": "Combining with other media",
        "t1": "Data storytelling",
        "metatags": "Multimedia"
    },
    {
        "id": 138,
        "slug": "sound",
        "title": "Sound",
        "m1": "Combining with other media",
        "t1": "Data storytelling",
        "metatags": "Multimedia"
    },
    {
        "id": 139,
        "slug": "video",
        "title": "Video",
        "m1": "Combining with other media",
        "t1": "Data storytelling",
        "metatags": "Multimedia"
    },
    {
        "id": 140,
        "slug": "scrollytelling-introduction",
        "title": "Scrollytelling introduction",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Introduction, Interactivity"
    },
    {
        "id": 141,
        "slug": "graphic-sequence",
        "title": "Graphic sequence",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Interactive"
    },
    {
        "id": 142,
        "slug": "animated-transition",
        "title": "Animated transition",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Interactive"
    },
    {
        "id": 143,
        "slug": "pan-and-zoom",
        "title": "Pan and zoom",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Zoom, Interactive",
        "links": "zooming-in, zooming-out"
    },
    {
        "id": 144,
        "slug": "moviescroller",
        "title": "Moviescroller",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Multimedia, Interactivity"
    },
    {
        "id": 145,
        "slug": "showandplay",
        "title": "Show-and-Play",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Multimedia, Interactivity"
    },
    {
        "id": 146,
        "slug": "scrollytelling-design-variations",
        "title": "Scrollytelling design variations",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Interactivity"
    },
    {
        "id": 147,
        "slug": "building-scrollytelling-articles",
        "title": "Building scrollytelling articles",
        "m1": "Scrollytelling",
        "t1": "Data storytelling",
        "metatags": "Interactivity"
    },
    {
        "id": 148,
        "slug": "pitfalls-in-data-3-stories",
        "title": "Pitfalls in data: 3 stories",
        "m1": "Pitfalls in metadata",
        "t1": "Pitfalls"
    },
    {
        "id": 149,
        "slug": "what-metadata-should-contain",
        "title": "What metadata should contain",
        "m1": "Pitfalls in metadata",
        "t1": "Pitfalls"
    },
    {
        "id": 150,
        "slug": "the-mean-versus-the-median",
        "title": "The mean versus the median",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls"
    },
    {
        "id": 151,
        "slug": "distributions",
        "title": "Distributions",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls",
        "m2": "Visualising distributions",
        "t2": "Chart types"
    },
    {
        "id": 152,
        "slug": "correlations",
        "title": "Correlations",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls",
        "m2": "Visualising correlations",
        "t2": "Chart types",
        "metatags": "Correlation"
    },
    {
        "id": 153,
        "slug": "percentages-versus-percentage-points",
        "title": "Percentages versus percentage points",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls"
    },
    {
        "id": 154,
        "slug": "normalising-data",
        "title": "Normalising data",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls"
    },
    {
        "id": 155,
        "slug": "correlation-is-not-causation",
        "title": "Correlation is not causation",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls",
        "metatags": "Correlation"
    },
    {
        "id": 156,
        "slug": "ecological-fallacy",
        "title": "Ecological fallacy",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls"
    },
    {
        "id": 157,
        "slug": "small-sample-size-effect",
        "title": "Small sample size effect",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls"
    },
    {
        "id": 158,
        "slug": "comparing-apples-to-oranges",
        "title": "Comparing apples to oranges",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls"
    },
    {
        "id": 159,
        "slug": "absolute-and-relative-probabilities",
        "title": "Absolute and relative probabilities",
        "m1": "Pitfalls in statistics",
        "t1": "Pitfalls"
    },
    {
        "id": 160,
        "slug": "file-encoding",
        "title": "File encoding",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls",
        "m2": "File encoding",
        "t2": "Dataviz in practice"
    },
    {
        "id": 161,
        "slug": "missing-values",
        "title": "Missing values",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls"
    },
    {
        "id": 162,
        "slug": "duplicates-aggregates-and-totals",
        "title": "Duplicates, aggregates and totals",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls"
    },
    {
        "id": 163,
        "slug": "unstandardised-data",
        "title": "Unstandardised data",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls"
    },
    {
        "id": 164,
        "slug": "data-type-mismatches",
        "title": "Data type mismatches",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls",
        "metatags": "Data types"
    },
    {
        "id": 165,
        "slug": "dates",
        "title": "Dates",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls",
        "m2": "Dates",
        "t2": "Design principles"
    },
    {
        "id": 166,
        "slug": "outliers",
        "title": "Outliers",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls"
    },
    {
        "id": 167,
        "slug": "ambiguity-in-data",
        "title": "Ambiguity in data",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls"
    },
    {
        "id": 168,
        "slug": "clean-spreadsheets",
        "title": "Clean spreadsheets",
        "m1": "Pitfalls in data",
        "t1": "Pitfalls",
        "metatags": "Guidelines"
    },
    {
        "id": 169,
        "slug": "breaking-scales",
        "title": "Breaking scales",
        "m1": "Pitfalls in dataviz: scales and proportions",
        "t1": "Pitfalls",
        "metatags": "Axes"
    },
    {
        "id": 170,
        "slug": "scales-in-line-charts",
        "title": "Scales in line charts",
        "m1": "Pitfalls in dataviz: scales and proportions",
        "t1": "Pitfalls",
        "m2": "A deep dive into line charts",
        "t2": "Chart types",
        "metatags": "Axes"
    },
    {
        "id": 171,
        "slug": "width-to-height-ratio",
        "title": "Width to height ratio",
        "m1": "Pitfalls in dataviz: scales and proportions",
        "t1": "Pitfalls",
        "m2": "Size and aspect ratio",
        "t2": "Design principles"
    },
    {
        "id": 172,
        "slug": "respecting-proportions",
        "title": "Respecting proportions",
        "m1": "Pitfalls in dataviz: scales and proportions",
        "t1": "Pitfalls"
    },
    {
        "id": 173,
        "slug": "preserve-scales-for-comparisons",
        "title": "Preserve scales for comparisons",
        "m1": "Pitfalls in dataviz: scales and proportions",
        "t1": "Pitfalls",
        "metatags": "Axes"
    },
    {
        "id": 174,
        "slug": "go-beyond-the-defaults",
        "title": "Go beyond the defaults",
        "m1": "Pitfalls in dataviz: colours",
        "t1": "Pitfalls"
    },
    {
        "id": 175,
        "slug": "accesible-colours",
        "title": "Accesible colours",
        "m1": "Pitfalls in dataviz: colours",
        "t1": "Pitfalls"
    },
    {
        "id": 176,
        "slug": "colour-on-colour",
        "title": "Colour on colour",
        "m1": "Pitfalls in dataviz: colours",
        "t1": "Pitfalls",
        "links": "contrast"
    },
    {
        "id": 177,
        "slug": "endrainbow",
        "title": "#EndRainbow",
        "m1": "Pitfalls in dataviz: colours",
        "t1": "Pitfalls",
        "links": "endrainbow"
    },
    {
        "id": 178,
        "slug": "perceptual-uniformity",
        "title": "Perceptual uniformity",
        "m1": "Pitfalls in dataviz: colours",
        "t1": "Pitfalls",
        "links": "perceptual-uniformity"
    },
    {
        "id": 179,
        "slug": "save-the-pies-for-dessert",
        "title": "Save the pies for dessert",
        "m1": "Pitfalls in dataviz: chart types",
        "t1": "Pitfalls",
        "m2": "A deep dive into pie charts",
        "t2": "Chart types"
    },
    {
        "id": 180,
        "slug": "line-charts-double-y-axes",
        "title": "Line charts: double y axes",
        "m1": "Pitfalls in dataviz: chart types",
        "t1": "Pitfalls",
        "m2": "A deep dive into line charts",
        "t2": "Chart types"
    },
    {
        "id": 181,
        "slug": "line-charts-line-interpolations",
        "title": "Line charts: line interpolations",
        "m1": "Pitfalls in dataviz: chart types",
        "t1": "Pitfalls",
        "m2": "A deep dive into line charts",
        "t2": "Chart types"
    },
    {
        "id": 182,
        "slug": "line-charts-perception-of-differences-between-lines",
        "title": "Line charts: perception of differences between lines",
        "m1": "Pitfalls in dataviz: chart types",
        "t1": "Pitfalls",
        "m2": "A deep dive into line charts",
        "t2": "Chart types"
    },
    {
        "id": 183,
        "slug": "stacked-charts",
        "title": "Stacked charts",
        "m1": "Pitfalls in dataviz: chart types",
        "t1": "Pitfalls"
    },
    {
        "id": 184,
        "slug": "map-projections",
        "title": "Map projections",
        "m1": "Pitfalls in cartography",
        "t1": "Pitfalls",
        "metatags": "Cartography"
    },
    {
        "id": 185,
        "slug": "normalising-data-for-mapping",
        "title": "Normalising data for mapping",
        "m1": "Pitfalls in cartography",
        "t1": "Pitfalls",
        "metatags": "Cartography"
    },
    {
        "id": 186,
        "slug": "choropleth-classification-methods",
        "title": "Choropleth classification methods",
        "m1": "Pitfalls in cartography",
        "t1": "Pitfalls",
        "metatags": "Cartography"
    },
    {
        "id": 187,
        "slug": "disputed-territories",
        "title": "Disputed territories",
        "m1": "Pitfalls in cartography",
        "t1": "Pitfalls"
    },
    {
        "id": 188,
        "slug": "data-acquisition",
        "title": "Data acquisition",
        "m1": "Ethics in data visualisation",
        "t1": "Pitfalls"
    },
    {
        "id": 189,
        "slug": "data-quantification",
        "title": "Data quantification",
        "m1": "Ethics in data visualisation",
        "t1": "Pitfalls"
    },
    {
        "id": 190,
        "slug": "data-transformation",
        "title": "Data transformation",
        "m1": "Ethics in data visualisation",
        "t1": "Pitfalls"
    },
    {
        "id": 191,
        "slug": "data-aggregation",
        "title": "Data aggregation",
        "m1": "Ethics in data visualisation",
        "t1": "Pitfalls"
    },
    {
        "id": 192,
        "slug": "anonymisation",
        "title": "Anonymisation",
        "m1": "Ethics in data visualisation",
        "t1": "Pitfalls"
    },
    {
        "id": 193,
        "slug": "visual-representation",
        "title": "Visual representation",
        "m1": "Ethics in data visualisation",
        "t1": "Pitfalls"
    },
    {
        "id": 194,
        "slug": "representing-people",
        "title": "Representing people",
        "m1": "Ethics in data visualisation",
        "t1": "Pitfalls"
    },
    {
        "id": 195,
        "slug": "csv-files",
        "title": "CSV files",
        "m1": "Data file formats",
        "t1": "Dataviz in practice"
    },
    {
        "id": 196,
        "slug": "excel-files",
        "title": "Excel files",
        "m1": "Data file formats",
        "t1": "Dataviz in practice",
        "m2": "Clean spreadsheets",
        "t2": "Pitfalls"
    },
    {
        "id": 197,
        "slug": "pdf-files",
        "title": "PDF files",
        "m1": "Data file formats",
        "t1": "Dataviz in practice"
    },
    {
        "id": 198,
        "slug": "xml-files",
        "title": "XML files",
        "m1": "Data file formats",
        "t1": "Dataviz in practice"
    },
    {
        "id": 199,
        "slug": "json-files",
        "title": "JSON files",
        "m1": "Data file formats",
        "t1": "Dataviz in practice"
    },
    {
        "id": 200,
        "slug": "databases",
        "title": "Databases",
        "m1": "Data file formats",
        "t1": "Dataviz in practice"
    },
    {
        "id": 201,
        "slug": "apis",
        "title": "API's",
        "m1": "Data file formats",
        "t1": "Dataviz in practice"
    },
    {
        "id": 202,
        "slug": "wide-versus-long-data",
        "title": "Wide versus long data",
        "m1": "Data structures",
        "t1": "Dataviz in practice"
    },
    {
        "id": 203,
        "slug": "transposing-data",
        "title": "Transposing data",
        "m1": "Data structures",
        "t1": "Dataviz in practice"
    },
    {
        "id": 204,
        "slug": "vector-data",
        "title": "Vector data",
        "m1": "Geographical data",
        "t1": "Dataviz in practice",
        "metatags": "Cartography"
    },
    {
        "id": 205,
        "slug": "raster-data",
        "title": "Raster data",
        "m1": "Geographical data",
        "t1": "Dataviz in practice",
        "metatags": "Cartography"
    },
    {
        "id": 206,
        "slug": "metadata",
        "title": "Metadata",
        "m1": "Cleaning data",
        "t1": "Dataviz in practice",
        "m2": "Pitfalls in metadata",
        "t2": "Pitfalls"
    },
    {
        "id": 207,
        "slug": "inspecting-data-data-profiling",
        "title": "Inspecting data: data profiling",
        "m1": "Cleaning data",
        "t1": "Dataviz in practice"
    },
    {
        "id": 208,
        "slug": "standardising-data",
        "title": "Standardising data",
        "m1": "Cleaning data",
        "t1": "Dataviz in practice",
        "m2": "Unstandardised data",
        "t2": "Pitfalls"
    },
    {
        "id": 209,
        "slug": "data-type-matching",
        "title": "Data type matching",
        "m1": "Cleaning data",
        "t1": "Dataviz in practice",
        "m2": "Data types mismatches",
        "t2": "Pitfalls"
    },
    {
        "id": 210,
        "slug": "dates",
        "title": "Dates",
        "m1": "Cleaning data",
        "t1": "Dataviz in practice",
        "m2": "Dates",
        "t2": "Pitfalls"
    },
    {
        "id": 211,
        "slug": "dropping-columns",
        "title": "Dropping columns",
        "m1": "Cleaning data",
        "t1": "Dataviz in practice"
    },
    {
        "id": 212,
        "slug": "missing-values-and-outliers",
        "title": "Missing values and outliers",
        "m1": "Cleaning data",
        "t1": "Dataviz in practice",
        "m2": "Missing values",
        "t2": "Pitfalls"
    },
    {
        "id": 213,
        "slug": "tabula",
        "title": "Tabula",
        "m1": "Tools for working with data",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 214,
        "slug": "microsoft-excel",
        "title": "Microsoft Excel",
        "m1": "Tools for working with data",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 215,
        "slug": "google-sheets",
        "title": "Google Sheets",
        "m1": "Tools for working with data",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 216,
        "slug": "open-refine",
        "title": "Open Refine",
        "m1": "Tools for working with data",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 217,
        "slug": "cleaning-data-in-excel",
        "title": "Cleaning data in Excel",
        "m1": "Tools for working with data",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 218,
        "slug": "bitmap-images",
        "title": "Bitmap images",
        "m1": "Graphic file formats",
        "t1": "Dataviz in practice",
        "m2": "Graphic file formats",
        "t2": "Design principles"
    },
    {
        "id": 219,
        "slug": "bitmap-file-formats",
        "title": "Bitmap file formats",
        "m1": "Graphic file formats",
        "t1": "Dataviz in practice",
        "m2": "Graphic file formats",
        "t2": "Design principles"
    },
    {
        "id": 220,
        "slug": "vector-images",
        "title": "Vector images",
        "m1": "Graphic file formats",
        "t1": "Dataviz in practice",
        "m2": "Graphic file formats",
        "t2": "Design principles"
    },
    {
        "id": 221,
        "slug": "vector-versus-bitmap-images",
        "title": "Vector versus bitmap images",
        "m1": "Graphic file formats",
        "t1": "Dataviz in practice",
        "m2": "Graphic file formats",
        "t2": "Design principles"
    },
    {
        "id": 222,
        "slug": "units",
        "title": "Units",
        "m1": "Graphic file formats",
        "t1": "Dataviz in practice",
        "m2": "Graphic file formats",
        "t2": "Design principles"
    },
    {
        "id": 223,
        "slug": "graphic-file-formats-guidelines",
        "title": "Graphic file formats guidelines",
        "m1": "Graphic file formats",
        "t1": "Dataviz in practice",
        "m2": "Graphic file formats",
        "t2": "Design principles"
    },
    {
        "id": 224,
        "slug": "html-and-img",
        "title": "HTML and <img>",
        "m1": "Online graphics",
        "t1": "Dataviz in practice",
        "m2": "HTML 101",
        "t2": "Accessibility"
    },
    {
        "id": 225,
        "slug": "accessibility",
        "title": "Accessibility",
        "m1": "Online graphics",
        "t1": "Dataviz in practice"
    },
    {
        "id": 226,
        "slug": "svg-and-its-elements",
        "title": "SVG and its elements",
        "m1": "Online graphics",
        "t1": "Dataviz in practice",
        "m2": "HTML 101",
        "t2": "Accessibility"
    },
    {
        "id": 227,
        "slug": "geometric-shape-svg-elements",
        "title": "Geometric shape SVG elements",
        "m1": "Online graphics",
        "t1": "Dataviz in practice"
    },
    {
        "id": 228,
        "slug": "more-advantages-of-svg",
        "title": "More advantages of SVG",
        "m1": "Online graphics",
        "t1": "Dataviz in practice"
    },
    {
        "id": 229,
        "slug": "styling-and-css",
        "title": "Styling and CSS",
        "m1": "Online graphics",
        "t1": "Dataviz in practice",
        "m2": "HTML 101",
        "t2": "Accessibility"
    },
    {
        "id": 230,
        "slug": "dynamic-svg",
        "title": "Dynamic SVG",
        "m1": "Online graphics",
        "t1": "Dataviz in practice",
        "metatags": "Interactivity"
    },
    {
        "id": 231,
        "slug": "accessing-data-of-a-dynamically-generated-visualisation",
        "title": "Accessing data of a dynamically generated visualisation",
        "m1": "Online graphics",
        "t1": "Dataviz in practice"
    },
    {
        "id": 232,
        "slug": "canvas",
        "title": "Canvas",
        "m1": "Online graphics",
        "t1": "Dataviz in practice"
    },
    {
        "id": 233,
        "slug": "rawgraphs",
        "title": "RAWGraphs",
        "m1": "Online graphics: tools",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 234,
        "slug": "datawrapper",
        "title": "Datawrapper",
        "m1": "Online graphics: tools",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 235,
        "slug": "flourish",
        "title": "Flourish",
        "m1": "Online graphics: tools",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 236,
        "slug": "svg-crowbar",
        "title": "SVG Crowbar",
        "m1": "Online graphics: tools",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 237,
        "slug": "chrome-developer-tools-capture-node-screenshot",
        "title": "Chrome Developer Tools Capture node screenshot",
        "m1": "Online graphics: tools",
        "t1": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 238,
        "slug": "tracing-charts",
        "title": "Tracing charts",
        "m1": "Reproducing and reusing visualisations",
        "t1": "Dataviz in practice"
    },
    {
        "id": 239,
        "slug": "templates-and-themes",
        "title": "Templates and themes",
        "m1": "Reproducing and reusing visualisations",
        "t1": "Dataviz in practice"
    },
    {
        "id": 240,
        "slug": "theming-charts",
        "title": "Theming charts",
        "m1": "Reproducing and reusing visualisations",
        "t1": "Dataviz in practice"
    },
    {
        "id": 241,
        "slug": "visualisation-layers",
        "title": "Visualisation layers",
        "m1": "Data visualisation design tricks",
        "t1": "Dataviz in practice",
        "metatags": "Chart layers"
    },
    {
        "id": 242,
        "slug": "the-margin-convention",
        "title": "The margin convention",
        "m1": "Data visualisation design tricks",
        "t1": "Dataviz in practice",
        "metatags": "Chart anatomy",
        "links": "chart-anatomy"
    },
    {
        "id": 243,
        "slug": "fonts",
        "title": "Fonts",
        "m1": "Data visualisation design tricks",
        "t1": "Dataviz in practice",
        "m2": "Typography",
        "t2": "Design principles"
    },
    {
        "id": 244,
        "slug": "direct-labelling",
        "title": "Direct labelling",
        "m1": "Data visualisation design tricks",
        "t1": "Dataviz in practice",
        "m2": "Chart guides: axes, grids and legends",
        "t2": "Design principles"
    },
    {
        "id": 245,
        "slug": "text-halos",
        "title": "Text halos",
        "m1": "Data visualisation design tricks",
        "t1": "Dataviz in practice",
        "metatags": "Chart layers",
        "links": "position-z"
    },
    {
        "id": 246,
        "slug": "colour-rgb-versus-hsl",
        "title": "Colour: RGB versus HSL",
        "m1": "Data visualisation design tricks",
        "t1": "Dataviz in practice"
    },
    {
        "id": 247,
        "slug": "apps-versus-libraries",
        "title": "Apps versus libraries",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 248,
        "slug": "explanatory-versus-exploratory-data-visualisation",
        "title": "Explanatory versus exploratory data visualisation",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 249,
        "slug": "microsoft-excel",
        "title": "Microsoft Excel",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice",
        "m2": "Tools for working with data",
        "t2": "Dataviz in practice"
    },
    {
        "id": 250,
        "slug": "google-sheets",
        "title": "Google Sheets",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice",
        "m2": "Tools for working with data",
        "t2": "Dataviz in practice"
    },
    {
        "id": 251,
        "slug": "adobe-illustrator",
        "title": "Adobe Illustrator",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 252,
        "slug": "datylon",
        "title": "Datylon",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 253,
        "slug": "business-intelligence-tools",
        "title": "Business intelligence tools",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 254,
        "slug": "rawgraphs",
        "title": "RAWGraphs",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice",
        "m2": "Online graphics: tools",
        "t2": "Dataviz in practice"
    },
    {
        "id": 255,
        "slug": "datawrapper",
        "title": "Datawrapper",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice",
        "m2": "Online graphics: tools",
        "t2": "Dataviz in practice"
    },
    {
        "id": 256,
        "slug": "flourish",
        "title": "Flourish",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice",
        "m2": "Online graphics: tools",
        "t2": "Dataviz in practice"
    },
    {
        "id": 257,
        "slug": "highcharts",
        "title": "Highcharts",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 258,
        "slug": "ggplot2",
        "title": "ggplot2",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 259,
        "slug": "python-visualisation-packages",
        "title": "Python visualisation packages",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 260,
        "slug": "plotly",
        "title": "Plotly",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 261,
        "slug": "d3js",
        "title": "D3.js",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 262,
        "slug": "vega",
        "title": "Vega",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 263,
        "slug": "observable-plot",
        "title": "Observable Plot",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 264,
        "slug": "qgis",
        "title": "QGIS",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 265,
        "slug": "leaflet",
        "title": "Leaflet",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice"
    },
    {
        "id": 266,
        "slug": "the-chartmaker-directory",
        "title": "The Chartmaker Directory",
        "m1": "Data visualisation tools",
        "t1": "Dataviz in practice",
        "m2": "Data visualisation galleries",
        "t2": "Chart types"
    },
    {
        "id": 267,
        "slug": "vertical-versus-horizontal-bars",
        "title": "Vertical versus horizontal bars",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types"
    },
    {
        "id": 268,
        "slug": "starting-bars-at-zero",
        "title": "Starting bars at zero",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types",
        "m2": "Pitfalls in dataviz: scales and proportions",
        "t2": "Pitfalls"
    },
    {
        "id": 269,
        "slug": "grids-versus-data-labels",
        "title": "Grids versus data labels",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 270,
        "slug": "label-placement",
        "title": "Label placement",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 271,
        "slug": "bar-size-and-spacing",
        "title": "Bar size and spacing",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types"
    },
    {
        "id": 272,
        "slug": "sorting-bars",
        "title": "Sorting bars",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types",
        "metatags": "Sorting"
    },
    {
        "id": 273,
        "slug": "grouped-bars",
        "title": "Grouped bars",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types"
    },
    {
        "id": 274,
        "slug": "stacked-bars",
        "title": "Stacked bars",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types"
    },
    {
        "id": 275,
        "slug": "more-creative-bar-charts",
        "title": "More creative bar charts",
        "m1": "A deep dive into bar charts",
        "t1": "Chart types"
    },
    {
        "id": 276,
        "slug": "guidelines-for-pie-charts",
        "title": "Guidelines for pie charts",
        "m1": "A deep dive into pie charts",
        "t1": "Chart types",
        "metatags": "Guidelines"
    },
    {
        "id": 277,
        "slug": "alternatives-to-pie-charts",
        "title": "Alternatives to pie charts",
        "m1": "A deep dive into pie charts",
        "t1": "Chart types"
    },
    {
        "id": 278,
        "slug": "start-at-zero",
        "title": "Start at zero?",
        "m1": "A deep dive into line charts",
        "t1": "Chart types",
        "m2": "Pitfalls in dataviz: scales and proportions",
        "t2": "Pitfalls"
    },
    {
        "id": 279,
        "slug": "line-interpolations",
        "title": "Line interpolations",
        "m1": "A deep dive into line charts",
        "t1": "Chart types",
        "m2": "Pitfalls in dataviz: scales and proportions",
        "t2": "Pitfalls"
    },
    {
        "id": 280,
        "slug": "smoothing",
        "title": "Smoothing",
        "m1": "A deep dive into line charts",
        "t1": "Chart types"
    },
    {
        "id": 281,
        "slug": "number-of-series",
        "title": "Number of series",
        "m1": "A deep dive into line charts",
        "t1": "Chart types"
    },
    {
        "id": 282,
        "slug": "labels-and-marks",
        "title": "Labels and marks",
        "m1": "A deep dive into line charts",
        "t1": "Chart types"
    },
    {
        "id": 283,
        "slug": "width-to-height-ratio",
        "title": "Width to height ratio",
        "m1": "A deep dive into line charts",
        "t1": "Chart types",
        "m2": "Pitfalls in dataviz: scales and proportions",
        "t2": "Pitfalls",
        "metatags": "width-to-height-ratio"
    },
    {
        "id": 284,
        "slug": "logarithmic-y-axes",
        "title": "Logarithmic y axes",
        "m1": "A deep dive into line charts",
        "t1": "Chart types",
        "m2": "Less common chart types",
        "t2": "Data storytelling"
    },
    {
        "id": 285,
        "slug": "correlation-is-not-causation",
        "title": "Correlation is not causation",
        "m1": "A deep dive into scatter plots",
        "t1": "Chart types",
        "m2": "Pitfalls in statistics",
        "t2": "Pitfalls"
    },
    {
        "id": 286,
        "slug": "explaining-scatter-plots",
        "title": "Explaining scatter plots",
        "m1": "A deep dive into scatter plots",
        "t1": "Chart types",
        "m2": "Less common chart types",
        "t2": "Data storytelling",
        "metatags": "scatter-plots"
    },
    {
        "id": 287,
        "slug": "trend-lines",
        "title": "Trend lines",
        "m1": "A deep dive into scatter plots",
        "t1": "Chart types",
        "m2": "Visual annotations",
        "t2": "Data storytelling"
    },
    {
        "id": 288,
        "slug": "median-quadrants",
        "title": "Median quadrants",
        "m1": "A deep dive into scatter plots",
        "t1": "Chart types"
    },
    {
        "id": 289,
        "slug": "handling-overlap",
        "title": "Handling overlap",
        "m1": "A deep dive into scatter plots",
        "t1": "Chart types"
    },
    {
        "id": 290,
        "slug": "labelling",
        "title": "Labelling",
        "m1": "A deep dive into scatter plots",
        "t1": "Chart types",
        "m2": "Text annotations",
        "t2": "Data storytelling"
    },
    {
        "id": 291,
        "slug": "calendar-heatmap",
        "title": "Calendar heatmap",
        "m1": "Visualising time series",
        "t1": "Chart types"
    },
    {
        "id": 292,
        "slug": "cycle-plots",
        "title": "Cycle plots",
        "m1": "Visualising time series",
        "t1": "Chart types"
    },
    {
        "id": 293,
        "slug": "area-charts-and-streamgraphs",
        "title": "Area charts and streamgraphs",
        "m1": "Visualising time series",
        "t1": "Chart types"
    },
    {
        "id": 294,
        "slug": "connected-scatter-plots",
        "title": "Connected scatter plots",
        "m1": "Visualising time series",
        "t1": "Chart types"
    },
    {
        "id": 295,
        "slug": "differences-in-time-series",
        "title": "Differences in time series",
        "m1": "Visualising time series",
        "t1": "Chart types"
    },
    {
        "id": 296,
        "slug": "box-plots",
        "title": "Box plots",
        "m1": "Visualising distributions",
        "t1": "Chart types"
    },
    {
        "id": 297,
        "slug": "univariate-scatter-plots-and-strip-plots",
        "title": "Univariate scatter plots and strip plots",
        "m1": "Visualising distributions",
        "t1": "Chart types"
    },
    {
        "id": 298,
        "slug": "beeswarm-plots",
        "title": "Beeswarm plots",
        "m1": "Visualising distributions",
        "t1": "Chart types"
    },
    {
        "id": 299,
        "slug": "histograms",
        "title": "Histograms",
        "m1": "Visualising distributions",
        "t1": "Chart types"
    },
    {
        "id": 300,
        "slug": "density-violin-and-raincloud-plots",
        "title": "Density, violin and raincloud plots",
        "m1": "Visualising distributions",
        "t1": "Chart types"
    },
    {
        "id": 301,
        "slug": "graphs-nodes-and-edges",
        "title": "Graphs, nodes and edges",
        "m1": "Visualising hierarchies and networks",
        "t1": "Chart types",
        "metatags": "Introduction"
    },
    {
        "id": 302,
        "slug": "hierarchies",
        "title": "Hierarchies",
        "m1": "Visualising hierarchies and networks",
        "t1": "Chart types"
    },
    {
        "id": 303,
        "slug": "hierarchies-with-numbers",
        "title": "Hierarchies with numbers",
        "m1": "Visualising hierarchies and networks",
        "t1": "Chart types"
    },
    {
        "id": 304,
        "slug": "networks",
        "title": "Networks",
        "m1": "Visualising hierarchies and networks",
        "t1": "Chart types"
    },
    {
        "id": 305,
        "slug": "sankey-and-alluvial-diagrams",
        "title": "Sankey and alluvial diagrams",
        "m1": "Visualising hierarchies and networks",
        "t1": "Chart types"
    },
    {
        "id": 306,
        "slug": "error-bars-and-the-cone-of-uncertainty",
        "title": "Error bars and the cone of uncertainty",
        "m1": "Visualising uncertainty",
        "t1": "Chart types"
    },
    {
        "id": 307,
        "slug": "more-intuitive-visualisation-of-uncertainty",
        "title": "More intuitive visualisation of uncertainty",
        "m1": "Visualising uncertainty",
        "t1": "Chart types"
    },
    {
        "id": 308,
        "slug": "frequencies",
        "title": "Frequencies",
        "m1": "Visualising uncertainty",
        "t1": "Chart types"
    },
    {
        "id": 309,
        "slug": "hypothetical-outcome-plots",
        "title": "Hypothetical outcome plots",
        "m1": "Visualising uncertainty",
        "t1": "Chart types"
    },
    {
        "id": 310,
        "slug": "data-dense-scatter-plots",
        "title": "Data dense scatter plots",
        "m1": "High data density visualisations",
        "t1": "Chart types",
        "m2": "A deep dive into scatter plots",
        "t2": "Chart types"
    },
    {
        "id": 311,
        "slug": "binned-scatter-plots",
        "title": "Binned scatter plots",
        "m1": "High data density visualisations",
        "t1": "Chart types",
        "m2": "A deep dive into scatter plots",
        "t2": "Chart types"
    },
    {
        "id": 312,
        "slug": "data-dense-time-series",
        "title": "Data dense time series",
        "m1": "High data density visualisations",
        "t1": "Chart types",
        "m2": "Visualising time series",
        "t2": "Chart types"
    },
    {
        "id": 313,
        "slug": "multiple-dimensions",
        "title": "Multiple dimensions",
        "m1": "High data density visualisations",
        "t1": "Chart types"
    },
    {
        "id": 314,
        "slug": "visualising-with-text-stemandleaf-plots",
        "title": "Visualising with text: stem-and-leaf plots",
        "m1": "Visualising text",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 315,
        "slug": "visualising-with-text-scattered-labels",
        "title": "Visualising with text: scattered labels",
        "m1": "Visualising text",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 316,
        "slug": "visualising-with-text-stacked-words",
        "title": "Visualising with text: stacked words",
        "m1": "Visualising text",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 317,
        "slug": "visualising-with-text-visual-text-properties",
        "title": "Visualising with text: visual text properties",
        "m1": "Visualising text",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 318,
        "slug": "visualisation-of-text-word-clouds",
        "title": "Visualisation of text: word clouds",
        "m1": "Visualising text",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 319,
        "slug": "visualisation-of-text-page-thumbnails",
        "title": "Visualisation of text: page thumbnails",
        "m1": "Visualising text",
        "t1": "Chart types",
        "metatags": "Text"
    },
    {
        "id": 320,
        "slug": "choropleth-maps",
        "title": "Choropleth maps",
        "m1": "Maps",
        "t1": "Chart types",
        "metatags": "Cartography"
    },
    {
        "id": 321,
        "slug": "scaled-symbol-maps",
        "title": "Scaled symbol maps",
        "m1": "Maps",
        "t1": "Chart types",
        "metatags": "Cartography"
    },
    {
        "id": 322,
        "slug": "cartograms",
        "title": "Cartograms",
        "m1": "Maps",
        "t1": "Chart types",
        "metatags": "Cartography"
    },
    {
        "id": 323,
        "slug": "hexbin-maps",
        "title": "Hexbin maps",
        "m1": "Maps",
        "t1": "Chart types",
        "metatags": "Cartography"
    },
    {
        "id": 324,
        "slug": "dot-maps",
        "title": "Dot maps",
        "m1": "Maps",
        "t1": "Chart types",
        "metatags": "Cartography"
    },
    {
        "id": 325,
        "slug": "flow-maps",
        "title": "Flow maps",
        "m1": "Maps",
        "t1": "Chart types",
        "metatags": "Cartography"
    },
    {
        "id": 326,
        "slug": "visual-vocabulary",
        "title": "Visual Vocabulary",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 327,
        "slug": "dataviz-project",
        "title": "Dataviz Project",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 328,
        "slug": "data-to-viz",
        "title": "Data to Viz",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 329,
        "slug": "dataviz-catalogue",
        "title": "Dataviz Catalogue",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 330,
        "slug": "map-of-firsts",
        "title": "Map of Firsts",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 331,
        "slug": "dataviz-inspiration",
        "title": "Dataviz Inspiration",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 332,
        "slug": "xenographics",
        "title": "Xenographics",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 333,
        "slug": "one-chart-at-a-time",
        "title": "One chart at a time",
        "m1": "Data visualisation galleries",
        "t1": "Chart types",
        "metatags": "Tools"
    },
    {
        "id": 334,
        "slug": "rawgraphs-demo",
        "title": "RAWgraphs demo",
        "m1": "RAWgraphs demop",
        "t1": "Chart types",
        "m2": "Data visualisation tools",
        "t2": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 335,
        "slug": "what-is-accessibility",
        "title": "What is accessibility?",
        "m1": "a11?",
        "t1": "Accessibility",
        "metatags": "Introduction"
    },
    {
        "id": 336,
        "slug": "web-accessbility",
        "title": "Web accessbility",
        "m1": "a11?",
        "t1": "Accessibility"
    },
    {
        "id": 337,
        "slug": "accessibility-standards",
        "title": "Accessibility standards",
        "m1": "a11?",
        "t1": "Accessibility"
    },
    {
        "id": 338,
        "slug": "accessibility-laws",
        "title": "Accessibility laws",
        "m1": "a11?",
        "t1": "Accessibility"
    },
    {
        "id": 339,
        "slug": "data-visualisation-is-accessibility",
        "title": "Data visualisation is accessibility",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 340,
        "slug": "accessibility-of-data-visualisation",
        "title": "Accessibility of data visualisation",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 341,
        "slug": "pourcaf-principles-perceivable",
        "title": "POUR-CAF principles: Perceivable",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 342,
        "slug": "pourcaf-principles-operable",
        "title": "POUR-CAF principles: Operable",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 343,
        "slug": "pourcaf-principles-understandable",
        "title": "POUR-CAF principles: Understandable",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 344,
        "slug": "pourcaf-principles-robust",
        "title": "POUR-CAF principles: Robust",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 345,
        "slug": "pourcaf-principles-compromising",
        "title": "POUR-CAF principles: Compromising",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 346,
        "slug": "pourcaf-principles-assistive",
        "title": "POUR-CAF principles: Assistive",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 347,
        "slug": "pourcaf-principles-flexible",
        "title": "POUR-CAF principles: Flexible",
        "m1": "Accessibility and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 348,
        "slug": "accessible-colour-palettes",
        "title": "Accessible colour palettes",
        "m1": "Colours, colour blindness and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 349,
        "slug": "contrast",
        "title": "Contrast",
        "m1": "Colours, colour blindness and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 350,
        "slug": "double-encoding",
        "title": "Double encoding",
        "m1": "Colours, colour blindness and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 351,
        "slug": "dark-mode",
        "title": "Dark mode",
        "m1": "Colours, colour blindness and data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 352,
        "slug": "chart-titles",
        "title": "Chart titles",
        "m1": "Making data visualisations understandable",
        "t1": "Accessibility"
    },
    {
        "id": 353,
        "slug": "guiding-text",
        "title": "Guiding text",
        "m1": "Making data visualisations understandable",
        "t1": "Accessibility"
    },
    {
        "id": 354,
        "slug": "alt-text",
        "title": "Alt text",
        "m1": "Making data visualisations understandable",
        "t1": "Accessibility"
    },
    {
        "id": 355,
        "slug": "understandable-chart-design",
        "title": "Understandable chart design",
        "m1": "Making data visualisations understandable",
        "t1": "Accessibility"
    },
    {
        "id": 356,
        "slug": "browsers-and-servers",
        "title": "Browsers and servers",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 357,
        "slug": "html-elements",
        "title": "HTML elements",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 358,
        "slug": "anchors",
        "title": "Anchors",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 359,
        "slug": "buttons-and-inputs",
        "title": "Buttons and inputs",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 360,
        "slug": "lists",
        "title": "Lists",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 361,
        "slug": "divs",
        "title": "Divs",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 362,
        "slug": "tables",
        "title": "Tables",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 363,
        "slug": "multimedia",
        "title": "Multimedia",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 364,
        "slug": "images",
        "title": "Images",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 365,
        "slug": "css",
        "title": "CSS",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 366,
        "slug": "summary-of-html-elements",
        "title": "Summary of HTML elements",
        "m1": "HTML 101",
        "t1": "Accessibility"
    },
    {
        "id": 367,
        "slug": "using-a-screen-reader",
        "title": "Using a screen reader",
        "m1": "Accessible HTML",
        "t1": "Accessibility"
    },
    {
        "id": 368,
        "slug": "semantic-html",
        "title": "Semantic HTML",
        "m1": "Accessible HTML",
        "t1": "Accessibility"
    },
    {
        "id": 369,
        "slug": "accessible-images",
        "title": "Accessible images",
        "m1": "Accessible HTML",
        "t1": "Accessibility"
    },
    {
        "id": 370,
        "slug": "accessible-tables",
        "title": "Accessible tables",
        "m1": "Accessible HTML",
        "t1": "Accessibility"
    },
    {
        "id": 371,
        "slug": "accessible-svg-and-aria",
        "title": "Accessible SVG and ARIA",
        "m1": "Accessible HTML",
        "t1": "Accessibility"
    },
    {
        "id": 372,
        "slug": "making-svg-content-fully-accessible",
        "title": "Making SVG content fully accessible",
        "m1": "Accessible HTML",
        "t1": "Accessibility"
    },
    {
        "id": 373,
        "slug": "accessibility-inspectors-and-audits",
        "title": "Accessibility inspectors and audits",
        "m1": "Accessible HTML",
        "t1": "Accessibility"
    },
    {
        "id": 374,
        "slug": "responsive-data-visualisation-introduction",
        "title": "Responsive data visualisation introduction",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility",
        "metatags": "Introduction"
    },
    {
        "id": 375,
        "slug": "scaling-visualisations",
        "title": "Scaling visualisations",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 376,
        "slug": "changing-chart-orientation",
        "title": "Changing chart orientation",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 377,
        "slug": "fluid-layout",
        "title": "Fluid layout",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 378,
        "slug": "changing-level-of-detail",
        "title": "Changing level of detail",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 379,
        "slug": "changing-data-density",
        "title": "Changing data density",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 380,
        "slug": "adapting-annotations-axes-and-legends",
        "title": "Adapting annotations, axes and legends",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 381,
        "slug": "annotated-zooms",
        "title": "Annotated zooms",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 382,
        "slug": "animation-and-streaming-data",
        "title": "Animation and streaming data",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 383,
        "slug": "changing-visual-encoding",
        "title": "Changing visual encoding",
        "m1": "Responsiveness and data visualisation for small screens",
        "t1": "Accessibility"
    },
    {
        "id": 384,
        "slug": "interactivity-in-html",
        "title": "Interactivity in HTML",
        "m1": "Accessible interactivity",
        "t1": "Accessibility"
    },
    {
        "id": 385,
        "slug": "accessible-interactive-data-visualisation",
        "title": "Accessible interactive data visualisation",
        "m1": "Accessible interactivity",
        "t1": "Accessibility"
    },
    {
        "id": 386,
        "slug": "mobile-interaction",
        "title": "Mobile interaction",
        "m1": "Accessible interactivity",
        "t1": "Accessibility"
    },
    {
        "id": 387,
        "slug": "accessibility-in-datawrapper",
        "title": "Accessibility in Datawrapper",
        "m1": "Accessibility in data visualisation: tools",
        "t1": "Accessibility",
        "metatags": "Tools"
    },
    {
        "id": 388,
        "slug": "accessible-visualisations-with-ai2thml",
        "title": "Accessible visualisations with ai2thml",
        "m1": "Accessibility in data visualisation: tools",
        "t1": "Accessibility",
        "metatags": "Tools"
    },
    {
        "id": 389,
        "slug": "accessibility-in-highcharts",
        "title": "Accessibility in Highcharts",
        "m1": "Accessibility in data visualisation: tools",
        "t1": "Accessibility",
        "metatags": "Tools"
    },
    {
        "id": 390,
        "slug": "braille-displays",
        "title": "Braille displays",
        "m1": "Braille, data sonification and data physicalisation",
        "t1": "Accessibility"
    },
    {
        "id": 391,
        "slug": "tactile-graphics",
        "title": "Tactile graphics",
        "m1": "Braille, data sonification and data physicalisation",
        "t1": "Accessibility"
    },
    {
        "id": 392,
        "slug": "data-sonification",
        "title": "Data sonification",
        "m1": "Braille, data sonification and data physicalisation",
        "t1": "Accessibility"
    },
    {
        "id": 393,
        "slug": "data-physicalisation",
        "title": "Data physicalisation",
        "m1": "Braille, data sonification and data physicalisation",
        "t1": "Accessibility"
    },
    {
        "id": 394,
        "slug": "start-small",
        "title": "Start small",
        "m1": "Implementing accessible data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 395,
        "slug": "learn-the-technicalities",
        "title": "Learn the technicalities",
        "m1": "Implementing accessible data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 396,
        "slug": "test-your-accessibility",
        "title": "Test your accessibility",
        "m1": "Implementing accessible data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 397,
        "slug": "accessibility-is-teamwork",
        "title": "Accessibility is teamwork",
        "m1": "Implementing accessible data visualisation",
        "t1": "Accessibility"
    },
    {
        "id": 398,
        "slug": "intro-to-chartability",
        "title": "Intro to Chartability",
        "m1": "Chartability: a framework for auditing accessibility",
        "t1": "Accessibility",
        "metatags": "Introduction"
    },
    {
        "id": 399,
        "slug": "fast-pass-accessibility-audit-with-chartability",
        "title": "Fast pass accessibility audit with Chartability",
        "m1": "Chartability: a framework for auditing accessibility",
        "t1": "Accessibility"
    },
    {
        "id": 400,
        "slug": "intermediate-accessibility-audit-with-chartability",
        "title": "Intermediate accessibility audit with Chartability",
        "m1": "Chartability: a framework for auditing accessibility",
        "t1": "Accessibility"
    },
    {
        "id": 401,
        "slug": "from-data-to-visualisation",
        "title": "From data to visualisation",
        "m1": "Introduction and origins of the Grammar of Graphics",
        "t1": "Grammar of Graphis",
        "metatags": "Introduction"
    },
    {
        "id": 402,
        "slug": "describing-visualisations",
        "title": "Describing visualisations",
        "m1": "Introduction and origins of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 403,
        "slug": "foundation-of-the-grammar-of-graphics",
        "title": "Foundation of the Grammar of Graphics",
        "m1": "Introduction and origins of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 404,
        "slug": "why-you-should-use-the-grammar-of-graphics",
        "title": "Why you should use the Grammar of Graphics",
        "m1": "Introduction and origins of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 405,
        "slug": "implementations-of-the-grammar-of-graphics",
        "title": "Implementations of the Grammar of Graphics",
        "m1": "Introduction and origins of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 406,
        "slug": "overview-of-gog-building-blocks",
        "title": "Overview of GoG building blocks",
        "m1": "Building blocks of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 407,
        "slug": "gog-building-blocks-data",
        "title": "GoG building blocks: data",
        "m1": "Building blocks of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 408,
        "slug": "gog-building-blocks-geometric-objects",
        "title": "GoG building blocks: geometric objects",
        "m1": "Building blocks of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 409,
        "slug": "gog-building-blocks-aesthetics",
        "title": "GoG building blocks: aesthetics",
        "m1": "Building blocks of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 410,
        "slug": "gog-building-blocks-transformations",
        "title": "GoG building blocks: transformations",
        "m1": "Building blocks of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 411,
        "slug": "gog-building-blocks-scales-and-guides",
        "title": "GoG building blocks: scales and guides",
        "m1": "Building blocks of the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 412,
        "slug": "intro-to-tidy-data",
        "title": "Intro to tidy data",
        "m1": "Tidy data",
        "t1": "Grammar of Graphis",
        "metatags": "Introduction"
    },
    {
        "id": 413,
        "slug": "variables-observations-and-values",
        "title": "Variables, observations and values",
        "m1": "Tidy data",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 414,
        "slug": "advantages-of-tidy-data",
        "title": "Advantages of tidy data",
        "m1": "Tidy data",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 415,
        "slug": "tidying-data",
        "title": "Tidying data",
        "m1": "Tidy data",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 416,
        "slug": "more-resources-on-tidy-data",
        "title": "More resources on tidy data",
        "m1": "Tidy data",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 417,
        "slug": "point-geometries",
        "title": "Point geometries",
        "m1": "Geometric objects in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 418,
        "slug": "text-geomietries",
        "title": "Text geomietries",
        "m1": "Geometric objects in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 419,
        "slug": "1dimensional-geometries",
        "title": "1-dimensional geometries",
        "m1": "Geometric objects in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 420,
        "slug": "2dimensional-geometries",
        "title": "2-dimensional geometries",
        "m1": "Geometric objects in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 421,
        "slug": "summarising-geometries",
        "title": "Summarising geometries",
        "m1": "Geometric objects in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 422,
        "slug": "introduction-to-aesthetics",
        "title": "Introduction to aesthetics",
        "m1": "Aesthetics in detail",
        "t1": "Grammar of Graphis",
        "metatags": "Introduction"
    },
    {
        "id": 423,
        "slug": "aesthetics-terminology",
        "title": "Aesthetics terminology",
        "m1": "Aesthetics in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 424,
        "slug": "more-aesthetics",
        "title": "More aesthetics",
        "m1": "Aesthetics in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 425,
        "slug": "geometries-and-aesthetics",
        "title": "Geometries and aesthetics",
        "m1": "Aesthetics in detail",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 426,
        "slug": "scales",
        "title": "Scales",
        "m1": "Scales, guides, facets and theming",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 427,
        "slug": "scale-types",
        "title": "Scale types",
        "m1": "Scales, guides, facets and theming",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 428,
        "slug": "scale-configuration",
        "title": "Scale configuration",
        "m1": "Scales, guides, facets and theming",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 429,
        "slug": "guides",
        "title": "Guides",
        "m1": "Scales, guides, facets and theming",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 430,
        "slug": "facets",
        "title": "Facets",
        "m1": "Scales, guides, facets and theming",
        "t1": "Grammar of Graphis",
        "metatags": "Small multiples"
    },
    {
        "id": 431,
        "slug": "theming",
        "title": "Theming",
        "m1": "Scales, guides, facets and theming",
        "t1": "Grammar of Graphis",
        "m2": "Reproducing and reusing charts",
        "t2": "Dataviz in practice"
    },
    {
        "id": 432,
        "slug": "chart-types-and-the-grammar-of-graphics-introduction",
        "title": "Chart types and the Grammar of Graphics introduction",
        "m1": "Chart types and the Grammar of Graphics",
        "t1": "Grammar of Graphis",
        "metatags": "Introduction"
    },
    {
        "id": 433,
        "slug": "layering-geometries",
        "title": "Layering geometries",
        "m1": "Chart types and the Grammar of Graphics",
        "t1": "Grammar of Graphis",
        "metatags": "Chart layers"
    },
    {
        "id": 434,
        "slug": "limits-of-the-grammar-of-graphics-and-its-implementations",
        "title": "Limits of the Grammar of Graphics and its implementations",
        "m1": "Chart types and the Grammar of Graphics",
        "t1": "Grammar of Graphis"
    },
    {
        "id": 435,
        "slug": "grammar-of-graphics-in-practice-tableau",
        "title": "Grammar of Graphics in practice: Tableau",
        "m1": "Grammar of Graphics in practice",
        "t1": "Grammar of Graphis",
        "m2": "Data visulasation tools",
        "t2": "Dataviz in practice",
        "metatags": "Tools"
    },
    {
        "id": 436,
        "slug": "grammar-of-graphics-in-practice-vegalite",
        "title": "Grammar of Graphics in practice: Vega-Lite",
        "m1": "Grammar of Graphics in practice",
        "t1": "Grammar of Graphis",
        "m2": "Data visulasation tools",
        "t2": "Dataviz in practice"
    },
    {
        "id": 437,
        "slug": "grammar-of-graphics-in-practice-ggplot2",
        "title": "Grammar of Graphics in practice: ggplot2",
        "m1": "Grammar of Graphics in practice",
        "t1": "Grammar of Graphis",
        "m2": "Data visulasation tools",
        "t2": "Dataviz in practice"
    },
    {
        "id": 438,
        "slug": "grammar-of-graphics-in-practice-observable-plot",
        "title": "Grammar of Graphics in practice: Observable Plot",
        "m1": "Grammar of Graphics in practice",
        "t1": "Grammar of Graphis",
        "m2": "Data visulasation tools",
        "t2": "Dataviz in practice"
    },
    {
        "id": 439,
        "slug": "grammar-of-graphics-in-practice-tableau",
        "title": "Grammar of Graphics in practice: Tableau",
        "m1": "Grammar of Graphics in practice",
        "t1": "Grammar of Graphis",
        "m2": "Data visulasation tools",
        "t2": "Dataviz in practice"
    }
]
export default pages