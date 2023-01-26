Every scale needs configuration: a colour scale needs to “know” what colours it should return, and an x scale needs to “know” what ticks it should use. But instead of requiring the user to provide all the configuration options for every scale of a plot, Vega-Lite, Observable Plot and ggplot2 provide a very **sensible set of default scale configurations**.

This means that as a user, you usually don’t have to worry about the scale configuration: out-of-the-box, without specifying any options, the tool will choose scale configurations that will lead to good results in most cases.

Among other things, this means that

- the default colour palettes used for colour scales are picked very carefully, and their effectiveness has been backed by scientific research
- position scales will have a number of ticks that is not too low nor too high
- tick values are chosen so that they have nice, rounded values as much as possible

All three tools allow the default scale settings to be overriden, so as a user you always have the option to modify the scale settings.