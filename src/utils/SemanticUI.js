/**
 * Transforms an array of objects into a specific format suitable for dropdown options.
 *
 * @param {Object[]} arr - The original array of objects to transform.
 * @param {string} keyAttr - The attribute name in the original objects to map to the 'key' attribute in the output format.
 * @param {string} valueAttr - The attribute name in the original objects to map to the 'value' attribute in the output format.
 * @param {string} textAttr - The attribute name in the original objects to map to the 'text' attribute in the output format.
 *
 * @returns {Object[]} - The transformed array of objects in the format: [{ key: ..., value: ..., text: ... }, ...]
 *
 * @example
 * const originalArray = [
 *   { id: "US", code: "US", name: "United States" },
 *   { id: "CA", code: "CA", name: "Canada" }
 * ];
 *
 * const transformedArray = transformDropdown(originalArray, "id", "code", "name");
 * console.log(transformedArray);
 * // Outputs: [{ key: "US", value: "US", text: "United States" }, { key: "CA", value: "CA", text: "Canada" }]
 */
export function transformDropdown(arr, keyAttr, valueAttr, textAttr) {
  return arr.map((item) => ({
    key: item[keyAttr],
    value: item[valueAttr],
    text: item[textAttr],
  }));
}
