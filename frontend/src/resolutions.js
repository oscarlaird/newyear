// rewrite the previous resolutions as a list of objects with fields id, text, and person (who defaults to oscar)
export const resolutions = [
    {id: 17, text: "I woke up by 6:30 am.", person: "george"},
    {id: 1, text: "I made no resolutions to exercise.", person: "oscar"},
    {id: 2, text: "I fast on Sundays and think no large thoughts, nor do any intelligent reading, except on that day.", person: "oscar"},
    {id: 3, text: "I awoke by 6:30 am.", person: "oscar"},
    {id: 4, text: "Immediately after waking, I took a cold shower.", person: "oscar"},
    {id: 5, text: "I wore a clean shirt.", person: "oscar"},
    {id: 6, text: "I went upstairs by 8:30pm or will do so.", person: "oscar"},
    {id: 7, text: "I did not eat bread, crackers, pasta, chips, sugar, or dried fruit even with soup.", person: "oscar"},
    {id: 8, text: "I did not eat outside of two compact 25 minute meals.", person: "oscar"},
    {id: 9, text: "I kept my pocketbook.", person: "oscar"},
    {id: 10, text: "I am sending a log to George.", person: "oscar"},
    {id: 11, text: "I reviewed or will review my diary with an SRS schedule: 3 days, 1 month, 1 year, and 3 years.", person: "oscar"},
    {id: 12, text: "I have or will write in my diary. At least the date.", person: "oscar"},
    {id: 13, text: "I read 30 pages of a business or technical book this morning.", person: "oscar"},
    {id: 14, text: "I reviewed my Notes SRS.", person: "oscar"},
    {id: 15, text: "I reached out to a new person outside of my network, ensuring no name appears twice.", person: "oscar"},
    {id: 16, text: "I recited inspirational excerpts from the business books or my Notes SRS.", person: "oscar"},
]

// array of unique people
export const persons = [...new Set(resolutions.map(resolution => resolution.person))];