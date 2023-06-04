import { c as create_ssr_component, b as createEventDispatcher, e as escape, d as add_attribute, f as each, v as validate_component, a as subscribe } from "../../chunks/index2.js";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { w as writable } from "../../chunks/index.js";
const tristate_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "input.svelte-1synwaa{transform:scale(2.4);transform-origin:bottom left;margin-right:25px}",
  map: null
};
const Tristate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { state } = $$props;
  const color = {
    undefined: "black",
    null: "black",
    true: "darkgreen",
    false: "red"
  }[state];
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  $$result.css.add(css$2);
  return `
<label style="${"color: " + escape(color, true)}" class="svelte-1synwaa"><input type="checkbox"${add_attribute("indeterminate", state === false, 0)} ${state === true || state === false ? "checked" : ""} class="svelte-1synwaa">
    ${slots.default ? slots.default({}) : ``}
</label>`;
});
const resolutions = [
  { id: 17, text: "I woke up by 6:30 am.", person: "george" },
  { id: 1, text: "I made no resolutions to exercise.", person: "oscar" },
  { id: 2, text: "I fast on Sundays and think no large thoughts, nor do any intelligent reading, except on that day.", person: "oscar" },
  { id: 3, text: "I awoke by 6:30 am.", person: "oscar" },
  { id: 4, text: "Immediately after waking, I took a cold shower.", person: "oscar" },
  { id: 5, text: "I wore a clean shirt.", person: "oscar" },
  { id: 6, text: "I went upstairs by 8:30pm or will do so.", person: "oscar" },
  { id: 7, text: "I did not eat bread, crackers, pasta, chips, sugar, or dried fruit even with soup.", person: "oscar" },
  { id: 8, text: "I did not eat outside of two compact 25 minute meals.", person: "oscar" },
  { id: 9, text: "I kept my pocketbook.", person: "oscar" },
  { id: 10, text: "I am sending a log to George.", person: "oscar" },
  { id: 11, text: "I reviewed or will review my diary with an SRS schedule: 3 days, 1 month, 1 year, and 3 years.", person: "oscar" },
  { id: 12, text: "I have or will write in my diary. At least the date.", person: "oscar" },
  { id: 13, text: "I read 30 pages of a business or technical book this morning.", person: "oscar" },
  { id: 14, text: "I reviewed my Notes SRS.", person: "oscar" },
  { id: 15, text: "I reached out to a new person outside of my network, ensuring no name appears twice.", person: "oscar" },
  { id: 16, text: "I recited inspirational excerpts from the business books or my Notes SRS.", person: "oscar" }
];
const persons = [...new Set(resolutions.map((resolution) => resolution.person))];
console.log(1);
const TODAY_DATE = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA").replace(/\//g, "-");
console.log(TODAY_DATE);
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
const app = initializeApp(firebaseConfig);
const makeTodayEntry = () => {
  return { date: TODAY_DATE, successes: {} };
};
const fetchEntries = async () => {
  const db = getDatabase(app);
  const entriesRef = ref(db, "entries");
  console.log("fetching entries");
  let snapshot = await get(entriesRef);
  console.log("fetched entries");
  return snapshot;
};
const entries = writable({ TODAY_DATE: makeTodayEntry() });
const loadEntries = async () => {
  console.log("loading entries into store");
  let snapshot = await fetchEntries();
  if (snapshot.exists()) {
    let stored_entries = snapshot.val();
    if (!stored_entries[TODAY_DATE]) {
      stored_entries[TODAY_DATE] = makeTodayEntry();
    }
    console.log("entries: ", stored_entries);
    console.log("storing entries");
    entries.set(stored_entries);
    console.log("stored entries");
  } else {
    console.log("No data available");
  }
};
loadEntries();
const DailyLog_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-t305wb{display:flex;flex-direction:column;align-items:flex-start;border:2px solid black;border-radius:5px;background-color:white;font-size:2.4em;padding:20px}h2.svelte-t305wb{margin:0}h3.svelte-t305wb{margin:30px 0 5px 0}",
  map: null
};
const DailyLog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) } = $$props;
  let { successes = {} } = $$props;
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.successes === void 0 && $$bindings.successes && successes !== void 0)
    $$bindings.successes(successes);
  $$result.css.add(css$1);
  return `<main class="svelte-t305wb"><h2 class="svelte-t305wb">${escape(date)}</h2>
    ${each(persons, (person, i) => {
    return `<h3 class="svelte-t305wb">${escape(capitalize(person))}</h3>
        
        ${each(resolutions.filter((resolution) => resolution.person === person), (resolution, i2) => {
      return `${validate_component(Tristate, "Tristate").$$render($$result, { state: successes[resolution.id] }, {}, {
        default: () => {
          return `${escape(resolution.text)}
            `;
        }
      })}`;
    })}`;
  })}
</main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-baydyd{display:flex;flex-direction:column;max-width:2000px;margin:100px auto;gap:60px}h1.svelte-baydyd{text-align:center;font-size:3em;color:black;text-decoration:underline}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let entry_list;
  let $entries, $$unsubscribe_entries;
  $$unsubscribe_entries = subscribe(entries, (value) => $entries = value);
  $$result.css.add(css);
  entry_list = [...Object.values($entries)].sort((a, b) => new Date(b.date) - new Date(a.date));
  $$unsubscribe_entries();
  return `<main class="svelte-baydyd"><h1 class="svelte-baydyd">NEW YEAR&#39;S RESOLUTIONS</h1>
	
	${each(entry_list, (entry) => {
    return `${validate_component(DailyLog, "DailyLog").$$render(
      $$result,
      {
        date: entry.date,
        successes: entry.successes
      },
      {},
      {}
    )}`;
  })}

</main>`;
});
export {
  Page as default
};
