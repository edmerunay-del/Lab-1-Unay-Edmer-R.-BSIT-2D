function generateIDs(count) {
  const ids = [];

  for (let n = 0; n < count; n++) {
    // Skip the number 5 as per the constraint
    if (n === 5) {
      continue;
    }

    ids.push(`ID-${n}`);
  }

  return ids;
}