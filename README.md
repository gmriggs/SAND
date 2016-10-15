# DryTopSAND
[![Code Climate](https://codeclimate.com/github/DryTopSAND/SAND/badges/gpa.svg)](https://codeclimate.com/github/DryTopSAND/SAND)     
A guild site for the Guild Wars 2 guild [SAND] - That's No Tornado

:tada:

## How to Update the Calendar

### Times

Times for the calendar are in UTC, aka "GW2 server time". UTC is also known as Zulu time, which is why times are in `Z` in the code. And keeping time in Z instead of PST or EST means not having to keep track of daylight savings.

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

[Link](calendar/events.json)

### How To Edit

Go to the above file and on the right side of the file click the pencil icon.

Then copy and paste the example code at the bottom of the list of events, second line from the end (aka not the `]`, above it), just editing the start and end times to be what you need.

Then in the bottom of the page, write a description for what change you're making, like the default `Update events.json`.
Proper convention is to make the first word a present tense verb, and keep it short and sweet. The description is optional.

Then click the Commit button. You should be able to then refresh the site and it'll be updated with the event!
