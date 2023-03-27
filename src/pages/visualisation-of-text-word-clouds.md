**Word clouds** (also known as tag clouds) were a very popular way of showing word frequencies in a corpus. In a world cloud the size of the text is proportional to the frequency of a word, and all words are arranged in a (usually) playful way. Text colour can be assigned randomly, or can be used to encode additional information. Before generating a word cloud, often occurring words like “the”, “of” and “then” or usually removed from the corpus.

![ ](Visualising%20text%2073ea05fcce1b4ee5939cd29821ddd468/9-cloud-titles.png)

A word cloud showing the tags assigned to videos on the YouTube channel of football club Juventus FC. Source: Maarten Lambrechts

Although they certainly are engaging, word clouds have been criticised for various reasons.

- bar charts showing word frequencies are much more effective
- long words draw much more attention than short ones, even though they might have the exact same frequency
- no relationship between the words is shown

Researchers have tried to come with word cloud layout algorithms that can reveal deeper patterns in the words used in a text. Grouping and colouring words by topic is one suggested improvement.

Before grouping:

![A word cloud with words in different colours. The words sharing the same colour are dispersed throughout the word cloud](Visualising%20text%2073ea05fcce1b4ee5939cd29821ddd468/word-cloud-before.png)

Source: [An Evaluation of Semantically Grouped Word Cloud Designs](https://vimeo.com/364568578)

And after grouping, with horizontal text only:

![The same word cloud as the one above, but with the words in the same colour grouped together and with all words horizontal](Visualising%20text%2073ea05fcce1b4ee5939cd29821ddd468/word-cloud-after.png)

Source: [An Evaluation of Semantically Grouped Word Cloud Designs](https://vimeo.com/364568578)

Instead of a word cloud, a <span class='internal-link'>[stem-and-leaf plot](visualising-with-text-stem-and-leaf-plots)</span> can be used to show how many times words occur together in corpus. The example below shows the co-occurrence of adjectives with the characters in Grimm’s fairy tales.

![A stem-and-leaf plot of adjectives associated with different characters in books](Visualising%20text%2073ea05fcce1b4ee5939cd29821ddd468/grimm-occurence-stem-leaf-brath.png)

Source: [Visualizing with Text](https://richardbrath.wordpress.com/books-and-chapters-by-richard-brath/visualizing-with-text-book-companion-web-site/#:~:text=Visualizing%20with%20Text%20is%20a,simple%20labels%20through%20to%20documents.), by Richard Brath