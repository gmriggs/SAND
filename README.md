# DryTopSAND
A guild site for the Guild Wars 2 guild [SAND] - That's No Tornado

:tada:

## How to Update the Calendar

### Times

Times for the calendar are in UTC, aka "GW2 server time".

For instance:

`"start": "2015-11-11T02:00:00Z",` means the event starts at 11/11/2015 @ 2am UTC, which is 11/10/2015 @ 6pm PST.

Use an online time converter to know what the event time will be in UTC, and format it like the current events:

```
,
{
    "title": "T6 Dry Top",
    "start": "2015-11-11T02:00:00Z",
    "end": "2015-11-11T05:00:00Z",
    "allDay": false
}
```


### File Location

[Link](calendar.html)

It's at calendar.html

### How To Edit

Go to the above file and on the right side of the file click the pencil icon.

Then copy and paste the example code at the bottom of the list of events, just editing the start and end times to be what you need.
Current line to start editing at would be line `103`

Then in the bottom of the page, write a description for what change you're making, like `Add an event`.
Proper convention is to make the first word a present tense verb, and keep it short and sweet. The description is optional.

Then click the Commit button. You should be able to then refresh the site and it'll be updated with the event!

## To Do List

### Content

1. Main page
2. Guild info
3. Rank info in guild page fo sho
4. Spruce up content on other pages, too
5. Teamspeak info on social page -- Yay nay?
6. Moon's chat templates on the Dry Top / Guild / Calendar / a new page?

### Technical

1. E2E tests
* Build status widget for the README
* Move the rest of the code over to Bootstrap
* Apple Easter Egg
* Maybe figure out why materialize breaks with the calendar
* Maybe some sort of CMS to make updating the site less intimidating
