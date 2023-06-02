console.log(1)
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {get, getDatabase, ref, set} from "firebase/database";
// import svelte store
import {writable} from 'svelte/store';

// create a writable store with an initial value of an empty array which then
// loads the entries from the database
import {resolutions} from "./resolutions.js";


// get local date as YYYY-MM-DD in one liner by substituting en-CA
const TODAY_DATE= new Date().toLocaleDateString('en-CA').replace(/\//g, '-');
console.log(TODAY_DATE)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuyGXyC-jlLuWrGnYdwvsrll1q8d1MV8I",
    authDomain: "newyear-ead20.firebaseapp.com",
    databaseURL: "https://newyear-ead20-default-rtdb.firebaseio.com",
    projectId: "newyear-ead20",
    storageBucket: "newyear-ead20.appspot.com",
    messagingSenderId: "941630640775",
    appId: "1:941630640775:web:3d25237fb712b4e09b1e22",
    measurementId: "G-DYE589L1YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const makeTodayEntry = () => {
    // return an object with todays date and an array of false values the same length as the resolutions array for successes
    const successes = resolutions.map(() => false);
    return {date: TODAY_DATE, successes: successes};
}

export const writeEntry = async (date, successes) => {
    // log the date and successes to the console
    console.log('writing entry')
    console.log(date);
    console.log(successes);
	const db = getDatabase(app);

    // Ensure that the successes array is an array of bools of the same length as the resolutions array
    if (successes.length != resolutions.length || !successes.every((val) => typeof val === "boolean")) {
        console.error("Error: successes array is not the same length as the resolutions array");
        return;
    }

    // Ensurethe date is a valid ISO date
    if (!/\d{4}-\d{2}-\d{2}/.test(date)) {
        console.error("Error: date is not a valid ISO date. Date must be in the format YYYY-MM-DD");
        return;
    }

    const newEntryRef = ref(db, "entries/" + date);
    set(newEntryRef, {'successes': successes, 'date': date});

}

const fetchEntries = async () => {
    const db = getDatabase(app);
    const entriesRef = ref(db, 'entries');
    return await get(entriesRef)
}
export const entries = writable({TODAY_DATE: makeTodayEntry()});
// load the entries from the database into the store
const loadEntries = async () => {
    console.log('loading entries into store')
    let snapshot = await fetchEntries();
    if (snapshot.exists()) {
        let stored_entries = snapshot.val();
        // if there is no entry for today, create one
        if (!stored_entries[TODAY_DATE]) {
            stored_entries[TODAY_DATE] = makeTodayEntry();
        }
        console.log('entries: ', stored_entries);
        entries.set(stored_entries);
    } else {
        console.log("No data available");
    }
}
loadEntries();
