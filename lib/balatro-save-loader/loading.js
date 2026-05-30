const returnPrefix = /^return /;
const stringKeys = /\["(.*?)"\]=/g;
const numberKeys = /\[(\d+)\]=/g;
const trailingCommas = /,}/g;

const numberKey = /"NOSTRING_(\d+)":/g;
const stringKey = /"([^"]*?)":/g;

export function rawToJSON(data) {
  return JSON.parse(
    data
      .replace(returnPrefix, "")
      .replace(stringKeys, '"$1":')
      .replace(numberKeys, '"NOSTRING_$1":')
      .replace(trailingCommas, "}"),
  );
}

