Whenever data is entered into a dataset manually, as a free text field (in contrast to values being picked from a list of possible values, for example), the probability of errors is very high. People make spelling errors and typos and many different names can be used to describe the same thing.

For example “The Netherlands”, “Netherlands”, “Holland”, “NL” and “Nederland” all refer to the same country, but will be considered different entities when entered into a database like this.

Correcting these values, or “standardising” them by setting all of them to “Netherlands” for example, can be done manually for smaller datasets. But this process is again prone to errors and does not scale for bigger datasets. Some software programs offer “clustering” algorithms that can detect groups of similar text and gives you methods to standardise them. But chances are high that even with these algorithms some manual checks and corrections are needed.

Because fixing unstandardised data is so costly, it should be avoided as much as possible. So when data is collected, users should be only allowed to pick values from a list, and data should be validated at the moment it is collected. For example, a date of birth should be picked with a date picker, or the date should be entered in a certain format that is checked when it is submitted.

<p class='center'>
<img src='Pitfalls%20in%20data%20eb8fedacd9fb46a98a3c448baaa69495/datepicker.png' alt='' class='max-400' />
</p>

When users can just pick a date on a calendar (above), the dates will be standardised. When users are offered a text field to enter a date (below), chances are high the data will not be standardised. Source: Maarten Lambrechts, CC BY SA 4,0

<p class='center'>
<img src='Pitfalls%20in%20data%20eb8fedacd9fb46a98a3c448baaa69495/datefield.png' alt='' class='max-400' />
</p>