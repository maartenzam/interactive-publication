install.packages("ggplot2")
library(ggplot2)

bubble.chart.data <- read.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRpzJYEJv9hkwx3ZLaimdpZmrHK_hyPGXlAho_BaM2p_qsWRygvorbif1KvyPP_k0mt6j04vIL0ANUT/pub?gid=43247911&single=true&output=csv")

ggplot(data = bubble.chart.data, mapping = aes(
  x = income/1000,
  y = lifeexp,
  size = population/1000000,
  fill = continent)) +
  geom_point(shape = 21) +
  scale_x_log10() +
  scale_size_area(
    max_size = 32,
    name = "Population (millions)",
    breaks = c(10, 100, 500, 1000)) +
  scale_fill_manual(
    values = c("#FF265C", "#FFE700", "#4ED7E9", "#70ED02", "purple"),
    name = "Continent") +
  theme_minimal() +
  theme(panel.grid.minor = element_blank(),
        legend.position = "top") +
  xlab("Income (GDP/capita, in thousands of dollars)") +
  ylab("Life expectancy (years)") +
  ggtitle("Strong correlation between economic development and life expectancy") #+
#facet_wrap(~continent)

ggsave(filename = "ggplot-bubble-chart.png", units = "cm", width = 25, height = 18)
