"use client";

import { useEffect, useState } from "react";

// Teks yang diketik lalu dihapus bergantian.
function Typewriter({ words, className = "" }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i];
    let t;
    if (!del && n < w.length) t = setTimeout(() => setN(n + 1), 65);
    else if (!del) t = setTimeout(() => setDel(true), 1700);
    else if (n > 0) t = setTimeout(() => setN(n - 1), 30);
    else { setDel(false); setI((i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [n, del, i, words]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>{words[i].slice(0, n)}<span className="caret" /></span>
    </span>
  );
}

export default Typewriter;
